const mongoose = require("mongoose");


const teacherSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    father_name: {
        type: String,
        required: true,
    },
    email: String,
    address: String,
    mobile: Number,
    subjects: {
        type: Array
    },
    department: String,
    qualification: String,
    gender: String,
})

let TeacherModel = mongoose.model("TeacherModel", teacherSchema);

module.exports = TeacherModel;