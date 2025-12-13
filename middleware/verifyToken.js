const config = require('../config/index');
const Customer = require('../models/user/customer.model');
const jwt = require('jsonwebtoken');

exports.verifyToken = async (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).json({
            success: false,
            message: "Authorization header missing"
        });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Token missing"
        })
    }

    // Verify Token
    jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({
                success: false,
                message: "Invalid or expired token"
            })
        }
    });

    // Find User from decoded token

    const customer = await Customer.findOne({ _id: decoded.id }).select("-password");

    if (!customer) {
        return res.status(404).json({
            success: false,
            message: "User no longer exists"
        })
    }

    req.customer = customer;
}
