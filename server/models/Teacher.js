const mongoose = require('mongoose');
const contactDetailsSchema = require('./ContactDetails'); // Adjust the path as necessary

const teacherSchema = new mongoose.Schema({
    schoolId:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    contactDetails: {
        type: contactDetailsSchema,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    assignedClass: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class'
    }
}, { timestamps: true });

module.exports = mongoose.model('Teacher', teacherSchema);
