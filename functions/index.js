const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const Stripe = require("stripe");

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey) {
    return response.status(500).send({error: "Payment service is not configured."});
  }

  const total = Number(request.query.total);
  if (!Number.isSafeInteger(total) || total <= 0) {
    return response.status(400).send({error: "total must be a positive integer amount in paise."});
  }

  try {
    const stripe = Stripe(stripeSecretKey);
    console.log("Payment Request Received", total);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "inr",
      payment_method: "pm_card_visa",
      automatic_payment_methods: {enabled: true},
    });

    return response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Payment intent creation failed", error);
    return response.status(500).send({error: "Unable to create payment intent."});
  }
});

exports.api = functions
    .runWith({secrets: ["STRIPE_SECRET_KEY"]})
    .https.onRequest(app);

// Local emulator endpoint is provided by the Firebase CLI after selecting a project.
