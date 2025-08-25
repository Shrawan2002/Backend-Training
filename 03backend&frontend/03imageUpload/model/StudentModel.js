const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: Number,
        required: true
    },
    image:{
        type: String,
        default: null
    }
})


const StudentModel = mongoose.model("Student",studentSchema);

module.exports = StudentModel;