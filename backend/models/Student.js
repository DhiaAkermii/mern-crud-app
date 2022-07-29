import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    studentId:{
       type: Number,
       unique : true,
    },
    name:String,
    familyName:String,
    address:String,
});


export default mongoose.model("Student", StudentSchema);