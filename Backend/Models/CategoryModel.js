const mongoose = require('mongoose');

const Category = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/ // Basic email validation
    },
    phone: {
        type: String,
        required: true,
        match: /^[0-9]{10}$/ // Example: 10-digit phone number validation
    },
    option: {
        type: String,
        enum: ['Graphic', 'Web', 'Logo', 'Others'], // Limit choices
        required: true,
    },
    otherOption: {
        type: String,
        required: function () {
            return this.option === 'Others';
        }
    },
    message: {
        type: String,
        required: true,
    },
}, { timestamps: true }); // Add timestamps for createdAt and updatedAt

module.exports = mongoose.model('CategoryMaster', Category);
