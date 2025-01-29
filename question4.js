const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true, // Ensure no extra spaces
    },
    price: {
        type: Number,
        required: true,
        min: 0, // Price should be a positive number
    },
    category: {
        type: String,
        required: true,
        trim: true, // Ensure no extra spaces
    },
    inStock: {
        type: Boolean,
        default: true, // Default value is true (in stock)
    }
});

// Create the Product model using the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
