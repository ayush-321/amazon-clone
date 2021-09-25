/* eslint-disable indent */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  // eslint-disable-next-line max-len
  "sk_test_51JcmTfSAzqGzxRz8O4tbD3amZ0ED1i21NRiwBfemRJq6ExOvP2wbNYepDOkTzwsJFXr0X6AI5qyjYju4jQfIgtLD00fGNrCygd"
);

// API

// - App config
const app = express();

// - Middlewares
// eslint-disable-next-line object-curly-spacing
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example Endpoint
// http://localhost:5001/clone-d2fbf/us-central1/api

//
