const express = require("express");
const StudentModel = require("../model/StudentModel.js");

const StudentRouter = express.Router();

StudentRouter.get("/",async(req,res)=>{
    res.send("Hi, I am student router");
    let student1 = new StudentModel({
        name: "adios",
        email: "adios@gmail.com",
        password:123213
    });
    let result = await student1.save();
    console.log(result);
})

module.exports = StudentRouter;