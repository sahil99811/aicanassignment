
const Class = require('../models/Class');
const Teacher=require('../models/Teacher')
exports.getAnalysis = async (req, res) => {
    try {
        const { id } = req.user
        const {interval}=req.query;
        // Fetch all classes of the particular school
        const classes = await Class.find({ schoolId:id }).populate('students');
        let date = new Date();

         if (interval === 'month') {
           date.setDate(date.getMonth() - 1);
         } else if (interval === 'year') {
           date.setDate(date.getDate() - 7);
         }
        let totalFeesCollected = 0;

        // Iterate through each class and its students
        classes.forEach(classData => {
            classData.students.forEach(student => {
                if (interval) {
                    const feesPaidDate = student.updatedAt; // Assuming updatedAt tracks the date of fees payment
                    if (student.feesPaid && feesPaidDate >= date) {
                        totalFeesCollected += classData.classFees;
                    }
                } else if (student.feesPaid) {
                    totalFeesCollected += classData.classFees;
                }
            });
        });
        const matchCondition = { schoolId: id };
        if (interval) {
            matchCondition.createdAt = { $gte:date };
        }
        const result = await Teacher.aggregate([
            {
                $match: matchCondition
            },
            {
                $group: {
                    _id: "$schoolId",
                    totalSalary: { $sum: "$salary" }
                }
            }
        ]);
        return res.status(200).json({
            success: true,
            totalFeesCollected,
            totalSalary: result[0] ? result[0].totalSalary : 0,
            message: "Fetched Successully"
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error. Please try again later.",
            error: error.message
        });
    }
};


