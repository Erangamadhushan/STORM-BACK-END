const express = require('express');
const router = express.Router();

const { createPaymentIntent } = require('../../controllers/payment/payment.controller');

router.post('/create-payment-intent', createPaymentIntent);

module.exports = router;