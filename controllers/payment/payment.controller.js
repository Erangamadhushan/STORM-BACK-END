const stripe = require('../../config/stripe');

exports.createPaymentIntent = async (req, res) => {
    try {
        const { watch } = req.body;

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: "payment",
            line_items: [{
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: watch.name,
                        image: [watch.image],
                    },
                    unit_amount: watch.price * 100,
                },
                quantity: watch.quantity,
            },
        ],
            success_url: `${process.env.CLIENT_URL}/payment-success`,
            cancel_url: `${process.env.CLIENT_URL}/payment-failure`,
        });

        res.json({ url: session.url });
    }
    catch (error) {
        res.status(500).json({ error: error.message})
    }
}