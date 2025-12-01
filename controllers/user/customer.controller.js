const Customer = require('../../models/user/customer.model');

exports.getAllCustomers = async (req, res, next) => {
    try {
        const customers = await Customer.find().lean();
        if (!customers || customers.length === 0) {
            return res.status(200).json({
                    success: true,
                    message: "No customers available",
                    data: null
                });
        }
        return res.status(200).json({
            success: true,
            message: "All customers are retrieved",
            data: customers
        });
    } catch (error) {
        next(error);
    }
}

exports.getCustomerByEmail = async (req, res, next) => {
    try {
        const email = req.params.email;
        const customer = await Customer.findOne({email});

        if (!customer) {
            return res.status(400).json({
                success: false,
                message: `No customer found with email: ${email}`,
                data: null
            });
        }
        return res.status(200).json({
            success: true,
            message: "Customer retrieved successfully",
            data: customer
        });
    } catch (error) {
        next(error);
    }
}

exports.createCustomer = async (req, res, next) => {
    try {
        const {name, email, password, contactNumber, shippingAddress} = req.body;
        const existingCustomer = await Customer.findOne({email});

        if (existingCustomer) {
            return res.status(400).json({
                success: false,
                message: "Customer with this email already exists",
                data: null
            });
        }
        const newCustomer = new Customer({name, email, password, contactNumber, shippingAddress});
        await newCustomer.save();
        return res.status(201).json({
            success: true,
            message: "Customer created successfully",
            data: newCustomer
        });
    } catch (error) {
        next(error);
    }
}

exports.deleteCustomer = async (req, res, next) => {
    try {
        const email = req.params.email;
        const deletedCustomer = await Customer.findOneAndDelete({email});

        if (!deletedCustomer) {
            return res.status(404).json({
                success: false,
                message: "Customer not found",
                data: null
            });
        }
        return res.status(200).json({
            success: true,
            message: "Customer deleted successfully",
            data: deletedCustomer
        });
    } catch (error) {
        next(error);
    }
}

exports.updateCustomer = async (req, res, next) => {
    try {
        const email = req.params.email;
        const {name, contactNumber, shippingAddress} = req.body;
        const updatedCustomer = await Customer.findOneAndUpdate(
            {email},
            {name, contactNumber, shippingAddress},
            {new: true}
        );
        if (!updatedCustomer) {
            return res.status(404).json({
                success: false,
                message: "Customer not found",
                data: null
            });
        }
        return res.status(200).json({
            success: true,
            message: "Customer updated successfully",
            data: updatedCustomer
        });
    } catch (error) {
        next(error);
    }
}

