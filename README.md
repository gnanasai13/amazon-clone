# Amazon Clone

A React e-commerce application inspired by an online storefront, with Firebase integration and a Stripe-powered payment flow.

## Features represented in the application

- Product listing and product views
- Shopping basket and subtotal
- Sign-in and checkout screens
- Order history and order details
- Payment-intent creation through a Firebase Cloud Function

## Technology

| Area | Tools |
|---|---|
| Frontend | React 18, React Router |
| UI | Material UI |
| Backend integration | Firebase Cloud Functions |
| Payments | Stripe |
| HTTP | Axios |

## Run the frontend locally

### Prerequisites

- Node.js 22 and npm
- Firebase CLI
- A Firebase project configured for your own development environment

```bash
git clone https://github.com/gnanasai13/amazon-clone.git
cd amazon-clone
npm install
npm start
```

## Firebase Functions

The backend function is in the `functions/` directory.

```bash
cd functions
npm install
```

Before using or deploying the payment function:

1. Create or select a Firebase project that you control.
2. Configure the Stripe secret as a Firebase Secret Manager secret named `STRIPE_SECRET_KEY`.
3. Deploy the function after configuring the secret:

```bash
firebase functions:secrets:set STRIPE_SECRET_KEY
firebase deploy --only functions
```

Never commit Stripe secret keys, Firebase service-account credentials, or other private credentials. The payment function is configured to read its Stripe key from the bound runtime secret. The Cloud Functions runtime is configured for Node.js 22.

## Project notes

This is a learning project. Do not use it to process real payments without a security review, server-side price validation, appropriate webhook handling, and production configuration.
