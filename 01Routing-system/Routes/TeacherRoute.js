const express = require("express");

const TeacherRoute = express.Router();

TeacherRoute.get("/",(req,res)=>{
    res.send("called Teachers route..");
})

module.exports = TeacherRoute;