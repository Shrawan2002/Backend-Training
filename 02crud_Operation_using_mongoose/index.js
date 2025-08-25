const express = require("express");
const mongoose = require("mongoose");
const adminRoute = require("./routes/adminRoute.js");
const teachersRoute = require("./routes/teachersRoute.js");
const app = express();

// app.get("/",(req,res)=>{
//     res.send("I Am root");
// })
app.use(express.json())

app.use("/admin", adminRoute);

app.use("/teachers", teachersRoute);

main()
.then(()=>{
    console.log("connecting to db");
}).catch((err)=>{
    console.log(err);
})

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/college");
}


app.listen(8080,()=>{
    console.log("server is running on Port 8080");
})