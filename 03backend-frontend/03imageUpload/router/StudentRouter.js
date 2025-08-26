const express = require("express");
const StudentModel = require("../model/StudentModel.js");
const StudentController = require("../controllers/StudentController.js");
const fileUpload = require("express-fileupload");
const StudentRouter = express.Router();


// Get all students
StudentRouter.get("/",async(req,res)=>{
    // res.send("Hi, I am student router");
    // let student1 = new StudentModel({
    //     name: "adios",
    //     email: "adios@gmail.com",
    //     password:123213
    // });
    // let result = await student1.save();
    // console.log(result);

    let students = await StudentModel.find();
    console.log(students);

    res.send({msg:"all students", data: students});
})

// Get student by ID
StudentRouter.get("/:id", async(req,res)=>{
    let id = req.params.id;
    let StudentData = await StudentModel.findById(id);
    res.send({msg: "student Found", student: StudentData});
})

// Create new student with image upload

StudentRouter.post("/",
    fileUpload({
        createParentPath: true 
    }),
     async (req,res)=>{
     try{
        const body = req.body;
        const image = req.files.image;
        let result = await new StudentController().imageUpload(body, image);
        res.send(result);
     }catch(err){
        res.status(500).send({ msg: "Upload failed", error: err.message });
     }
    }
)

module.exports = StudentRouter;