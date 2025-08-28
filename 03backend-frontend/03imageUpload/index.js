const express = require("express");
const StudentRouter = require("./router/StudentRouter");
const  mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const path = require("path");



// enable CORS for all origins
app.use(cors());
app.use(express.json());
// app.use("/image", express.static(path.join(__dirname, "public/image")));
app.use(express.static("public"));

// OR enable CORS only for frontend (recommended)
// app.use(cors({
//     origin: "http://localhost:5173"  // your React app
// }));



// app.get("/",(req,res)=>{
//     res.send("hi i am root")
// })

app.use("/students", StudentRouter);




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
    console.log("server is run on port 8080");
})