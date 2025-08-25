import { useEffect, useState } from "react";
import axios from "axios";

export default function StudentList({setSelectedId}){
    let [studentData, setStudentData]  = useState([]);
    
    useEffect(()=>{
        axios.get("http://localhost:8080/students")
        .then((res)=>{
            console.log(res.data.data);
            setStudentData(res.data.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[]);
    console.log(studentData);

    return (
        <div className="p-6">
            <h2>Students  List</h2>
           <div className="overflow-x-auto shadow rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                                Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                                Email
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase">
                                Password
                            </th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody  className="bg-white divide-y divide-gray-200">
                        {studentData?.map((data)=>(
                            <tr key={data._id}>
                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                    {data.name}
                                </td>
                               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                {data.email}
                               </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {data.password}
                                </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                    <button
                                        className="px-4 py-2 text-sm font-semibold text-black bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition"
                                        onClick={()=>setSelectedId(data._id)}
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </div>
       </div>
    )
}