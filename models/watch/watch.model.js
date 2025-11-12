const mongoose = require('mongoose');

const watchSchema = new mongoose.Schema({
    modelNumber: {
        type: String,
        required: true, 
        unique: true
    },
    brand: {
        type: String,
        rquired: true,
        unique: false
    },
    price: {
        type: Number,
        required: true,
        unique: false
    }
}, { timestamps: true});

module.exports = mongoose.model('Watch', watchSchema)