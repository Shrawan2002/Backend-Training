const express = require("express");

const AdminRouter = express.Router();

AdminRouter.get("/", (req,res)=>{
    res.send("this is called admin");
})

module.exports = AdminRouter;