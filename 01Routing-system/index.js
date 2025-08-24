const express = require("express");
const app = express();
const AdminRouter = require("./Routes/AdminRouter");
const StudentsRouter = require("./Routes/StudentsRouter");
const TeacherRoute = require("./Routes/TeacherRoute");

app.use("/admin", AdminRouter);
app.use("/students", StudentsRouter);
app.use("/teachers", TeacherRoute);

app.listen(8080,()=>{
    console.log("server is run on port:",8080);
})