const Student = require('../models/Student');
const Class = require('../models/Class');

exports.addStudent = async (req, res) => {
    try {
        console.log("called api")
        const { name, gender, dob, phoneno, email, address, classId, feesPaid } = req.body;

        // Create a new student
        const student = await Student.create({
            name,
            contactDetails: { gender: gender, dob: dob, phone: phoneno, email: email, address: address },
            feesPaid: feesPaid
        });
        console.log(student,classId)

        // Update the class with the new student
        await Class.findByIdAndUpdate(classId, { $push: { students: student._id } });

        return res.status(200).json({
            success: true,
            message: "Student added successfully."
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error. Please try again later.",
            error: error.message
        });
    }
};
