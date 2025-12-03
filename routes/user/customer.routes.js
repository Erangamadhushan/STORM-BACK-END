const express = require('express');
const router = express.Router();

const customerController = require('../../controllers/user/customer.controller');
// Create a new customer
router.post('/create-customer', customerController.createCustomer);

// Route to get all customers, base route: api/customers
router.get('/', customerController.getAllCustomers);

// Route: /api/customers/:email
router.get('/:email', customerController.getCustomerByEmail);


// Delete a customer by email
router.delete('/delete-customer/:email', customerController.deleteCustomer);

// Update customer details
router.patch('/update-customer/:email', customerController.updateCustomer);

module.exports = router;