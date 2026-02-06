const Stripe = require('stripe');

try {
    if (!process.env.STRIPE_SECRET_KEY) {
        throw new Error("STRIPE_SECRET_KEY is not defined in environment variables");
    }

}
catch (error) {
    console.error("Error loading Stripe configuration:", error.message);
    process.exit(1);
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2025-12-15.clover",
});

module.exports = stripe;

