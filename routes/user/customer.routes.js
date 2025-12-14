const express = require('express');
const router = express.Router();
const verifyToken = require('../../middleware/verifyToken');
const User = require('../../models/user/customer.model');

const customerController = require('../../controllers/user/customer.controller');
// Create a new customer
router.post('/create-account', customerController.createCustomer);

// Route to get all customers, base route: api/customers
router.get('/', customerController.getAllCustomers);

// Route: /api/auth/login
router.get('/login', customerController.getCustomerByEmail);

// Route /api/auth/login
router.post('/login', customerController.authenticateCustomer);

// Protected route to get user profile
router.get("/me", verifyToken, async (req, res) => {
    const user = await User.findById(req.user.id).select("-password");
    res.json({
        success: true,
        message: "User profile retrieved successfully",
        data: user
    });
});


// Delete a customer by email
router.delete('/delete-customer/:email', customerController.deleteCustomer);

// Update customer details
router.patch('/update-customer/:email', customerController.updateCustomer);

module.exports = router;