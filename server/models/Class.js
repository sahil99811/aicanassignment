const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    schoolId:{
        type: String,
        required: true,
    },
    className: {
        type: String,
        required: true,
    },
    section: {
        type: String,
        required: true,
        unique:true
    },
    year: {
        type: Number,
        required: true,
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
    },
    classFees: {
        type: Number,
        required: true
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }]
}, { timestamps: true });

classSchema.pre('save', function(next) {
    if (this.students.length >= 30) {
        return next(new Error('A class cannot have more than 30 students.'));
    }
    next();
});

module.exports = mongoose.model('Class', classSchema);
