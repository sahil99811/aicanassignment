const Teacher=require('../models/Teacher')
exports.addTeacher=async (req,res)=>{
    try {
        const {id}=req.user;
        const {name,gender,dob,phoneno,email,address,salary}=req.body;
        await Teacher.create({
            schoolId:id,
            name,
            contactDetails:{gender:gender,dob:dob,phone:phoneno,email:email,address:address},
            salary:salary,
        })
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
//teacher who were assigned to any classes
exports.getAllTeacher=async (req,res)=>{
    try {
        const {id}=req.user;
        const result=await Teacher.find({schoolId:id,assignedClass: { $exists: false }});
        return res.status(200).json({
            success:true,
            teachers:result,
            message:"All Class fetched Successfully..."
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Server error. Please try again later.",
            error: error.message
        });
    }
}
