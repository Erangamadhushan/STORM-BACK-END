const express = require('express');
const router = express.Router();

const paymentController = require('../../controllers/payment/payment.controller');
const verifyToken = require('../../middleware/verifyToken');

// Route to create a payment intent
router.post('/create-checkout-session',verifyToken, paymentController.createPaymentIntent);


module.exports = router;