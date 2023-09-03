const functions = require("firebase-functions");
const express = require("express");
const cors= require("cors");
const stripe= require("stripe")(
    // eslint-disable-next-line max-len
    "sk_test_51MuhGJSFXjiR08JXmazRAOSuXLQYMBAgXbIR3GD88LtTSVGkfhkSOTxzvRruJtN6Rfjx3ULwbr1oCZzA62FRZyyh00KcCuWqvg");


const app=express();

app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async ( request, response ) => {
  const total = request.query.total;

  console.log("Payment Request Received", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
    payment_method: "pm_card_visa",
    automatic_payment_methods: {enabled: true},
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);


//  http://127.0.0.1:5001/clone-4f76f/us-central1/api
