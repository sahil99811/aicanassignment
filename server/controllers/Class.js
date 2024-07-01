const Class=require('../models/Class')
const Teacher=require('../models/Teacher')
exports.addClass=async ()=>{
    try {
        const {id}=req.user;
        const {className,section,teacher,classFees,year}=req.body;
        const newClass=await Class.create({
            schoolId:id,
            className,
            section:section,
            year:year,
            teacher:teacher,
            classFees
        })
        await Teacher.findByIdAndUpdate(teacher,{assignedClass:newClass._id})
        return res.status(200).json({
            success:true,
            message:"Teacher Created Successfully..."
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message:"Serve error",
        });
    }
}

exports.classAnalytics=async (req,res)=>{
    try {
        const {id}=req.user;
        const res=await Class.find({schoolId:id});
        return res.status(200).json({
            success:true,
            data:res,
            message:"Teacher Created Successfully..."
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message:"Serve error",
        });
    }
}

exports.classAnalytic = async (req, res) => {
    try {
        const { id } = req.params;
        
        // Fetch the class by ID and populate the students field
        const classData = await Class.findById(id).populate({
            path: 'students className section year teacher classFees',
            populate: {
                path: 'contactDetails teacher'
            }
        });

        if (!classData) {
            return res.status(404).json({
                success: false,
                message: "Class not found."
            });
        }

        let totalStudents = 0;
        let maleStudents = 0;
        let femaleStudents = 0;

        // Loop through the students to calculate counts
        classData.students.forEach(student => {
            totalStudents += 1;
            if (student.contactDetails.gender === 'Male') {
                maleStudents += 1;
            } else if (student.contactDetails.gender === 'Female') {
                femaleStudents += 1;
            }
        });

        return res.status(200).json({
            success: true,
            data: {
                totalStudents,
                maleStudents,
                femaleStudents
            },
            message: "Class analytics fetched successfully."
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error. Please try again later.",
            error: error.message
        });
    }
};

///for adding student in class
exports.getAllClass=async (req,res)=>{
    try {
        const {id}=req.user;
        const res=await Class.find({schoolId:id});
        return res.status(200).json({
            success:true,
            data:res,
            message:"All Class fetched Successfully..."
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error. Please try again later.",
            error: error.message
        });
    }
}