const express = require("express");
const TeacherModel = require("../models/TeacherModel");
const teachersRoute = express.Router();

teachersRoute.get("/", async (req,res)=>{
    let result = await TeacherModel.find();
    // let resOne = await TeacherModel.findById("68a9c9fb0db09e2de3b035d6");
    // console.log(resOne);
    // if(!resOne){
    //   let newObj = {...resOne, err :"data not found"}
    //    console.log(newObj);
    //    res.send({msg: "data not found in data base", data: newObj})
    // }else{
    // res.send({msg : "data fetched", data : newObj});

    // }

    res.send({msg : "data fetched", data : result});
   
    // res.send("Hi, i am teacher route");
})

module.exports = teachersRoute;