const stripe = require('../../config/stripe');

exports.createPaymentIntent = async (req, res) => {
    try {
        const { image, name, price, quantity } = req.body;
        console.log('Creating payment intent for watch:', req.body);

        if (!image || !name || !price || !quantity) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: "payment",
            line_items: [{
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: name,
                        images: [image],
                    },
                    unit_amount: parseInt(price/quantity),
                },
                quantity:quantity,
            },
        ],
            success_url: `${process.env.CLIENT_URL}/payment-success`,
            cancel_url: `${process.env.CLIENT_URL}/payment-failure`,
        });

        // Save the session ID and order details to your database here if needed
        const order = new Order({
            userId: req.user.id, 
            stripeSessionId: session.id,
            paymentMethod: "card",
            amount: price,
            status: "pending",
        });
        await order.save();

        res.json({ url: session.url });
    }
    catch (error) {
        res.status(500).json({ error: error.message})
    }
}