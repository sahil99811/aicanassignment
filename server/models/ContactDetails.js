const mongoose = require('mongoose');

const contactDetailsSchema = new mongoose.Schema({
    gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Other']
    },
    dob: {
        type: Date,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
}, { _id: false }); // Set _id to false to avoid creating a separate _id for this sub-document

module.exports = contactDetailsSchema;
