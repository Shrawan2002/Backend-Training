const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: Number,
        required: true,
    },
    category: {
        type : String
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TeacherModel"
    }
});

let AdminModel = mongoose.model("AdminModel", adminSchema);

module.exports = AdminModel;