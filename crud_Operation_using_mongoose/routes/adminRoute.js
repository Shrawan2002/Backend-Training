const express = require("express");
const adminRoute = express.Router();
const AdminModel = require("../models/AdminModel.js");
const AdminController = require("../controllers/AdminController.js");



adminRoute.get("/",async (req,res)=>{
  let page = req.query.page;
  let limit = req.query.limit;
  console.log(`page : ${page} and limit : ${limit}`);
  // res.send("hi i am root");
  let result = new AdminController().adminPagination(page,limit);
  result
  .then((success)=>{
    res.send(success);
  }).catch((err)=>{
    res.send(err);
  })
})

adminRoute.get("/sorting",(req,res)=>{
  const sortBy = req.query.sortBy || "name";
  const order = req.query.order === "desc"? -1 : 1;
  const result = new AdminController().adminSorting(sortBy, order);
    result
  .then((success)=>{
    res.send(success);
  }).catch((err)=>{
    res.send(err);
  })
})

adminRoute.get("/filter", (req,res)=>{
  const category = req.query.category;
  const minValue = req.query.minValue;
  const maxValue = req.query.maxValue;
  // const result = new AdminController.adminFilter(category,minValue,maxValue);
  console.log(`category : ${category}, minValue : ${minValue} ,maxValue: ${maxValue}`);
  const result = new AdminController().adminFilter(category, minValue, maxValue);
  result
   .then((success)=>{
    res.send(success);
  }).catch((err)=>{
    res.send(err);
  })
})



// adminRoute.get("/", async (req,res)=>{
//    try{
//      let data = await AdminModel.find({});
//     // res.send("Hi i am Admin Route");
//     res.send(data);
//    }catch(err){
//     console.log(err);
//     res.status(500).send("Server Error");
//    }
// })

// adminRoute.post("/", async (req,res)=>{
//   try{
//     let {name,email,password} = req.body;
//    let upData = await AdminModel.insertOne({name: name, email:email,password: password});
//    // console.log(upData);
//    // res.send(upData);
//    res.json({ success: true, result: upData })
//   }catch(err){
//    //   console.log(err);
//    console.log(err.message);
//    res.status(500).json({ success:false, error: err.message })
//   }

// })

module.exports = adminRoute;