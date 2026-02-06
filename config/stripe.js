const Stripe = require('stripe');

if (!process.env.STRIPE_SECRET_KEY) {
    console.error("Error: STRIPE_SECRET_KEY is not defined in environment variables.");
    process.exit(1);
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2025-12-15.clover",
});

module.exports = stripe;

