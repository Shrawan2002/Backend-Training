import { useEffect, useState } from "react";
import axios from "axios";

export default function StudentList(){
    let [studentData, setStudentData]  = useState("");
    
    useEffect(()=>{
        axios.get("http://localhost:8080/students")
        .then((res)=>{
            console.log(res.data);
            setStudentData(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[]);

    return (
        <div>
            <h1>Hello i am Student List</h1>
            <p>{studentData}</p>
            {/* {
                studentData.map((el)=>{
                    return <li key={Date.now()}>{el}</li>
                })
            } */}
        </div>
    )
}