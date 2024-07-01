const mongoose = require('mongoose');
const contactDetailsSchema = require('./ContactDetails'); // Adjust the path as necessary

const studentSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    contactDetails: {
        type: contactDetailsSchema,
        required: true
    },
    feesPaid: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
