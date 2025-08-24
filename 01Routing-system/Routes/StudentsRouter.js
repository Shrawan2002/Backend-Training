const express = require("express");

const StudentsRouter = express.Router();

StudentsRouter.get("/", (req,res)=>{
    res.send("called student router");
})

module.exports = StudentsRouter;