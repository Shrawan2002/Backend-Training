const mongoose =require("mongoose");
const AdminModel = require("../models/AdminModel.js");
const data = require("./data.js");
const TeacherModel = require("../models/TeacherModel.js");

main()
.then(()=>{
    console.log("connecting to db");
}).catch((err)=>{
    console.log(err);
})

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/college");
}

 async function initData(){
    await AdminModel.deleteMany({});
    await AdminModel.insertMany(data);
    console.log("data was initialized");
  }

//  initData();

 async function addData() {
    let data1 = new AdminModel({
        name:"adam",
        email: "adam@gmail.com",
        password: 338875,
    })

    let teacher1 = await TeacherModel.findOne({name: "Suresh"});

    data1.teacher = teacher1;
    let result = await data1.save();
    console.log(result);
 }

 addData();

// Equivalent using create()

// Why create() is Useful
//Cleaner code – one line instead of two (new + save()).

// Returns the saved document immediately (with _id).
// Can insert multiple docs at once:

//  async function addData() {
//     let teacher1 = await TeacherModel.findOne({ name: "Suresh" });

//     let data1 = await AdminModel.create({
//         name: "adam",
//         email: "adam@gmail.com",
//         password: 338875,
//         teacher: teacher1
//     });

//     console.log(data1);
// }


