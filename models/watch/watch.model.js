const mongoose = require('mongoose');

const watchSchema = new mongoose.Schema({
    modelNumber: {
        type: String,
        required: true, 
        unique: true
    },
    imageURL: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true,
    },
    countryOfOrigin: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive number']
    },
    type: {
        type: String,
        required: true
    }
}, { timestamps: true});

module.exports = mongoose.model('Watch', watchSchema);