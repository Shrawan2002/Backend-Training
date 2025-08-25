const mongoose = require("mongoose");
const TeacherModel = require("../models/TeacherModel");
const teacherData = require("./teacherData");


main()
.then(()=>{
    console.log("connecting to db");
}).catch((err)=>{
    console.log(err);
})

async function  main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/college")
}

async function initData(){
    await TeacherModel.deleteMany({});
    await TeacherModel.insertMany(teacherData);
    console.log("data was initialized");
}

initData();