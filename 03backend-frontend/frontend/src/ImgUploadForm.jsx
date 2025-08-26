import axios from "axios"
import { useEffect, useState } from "react"

export default function ImgUploadForm({selectedId}){
    let [user, setUser] = useState(null)
    let [formData, setFormData] = useState({
        name: "Enter Name",
        email: "Enter Email",
        password: 123,
        image: null,
        oldImage: ""
    })

     // Fetch user by ID if editing
    //  useEffect(()=>{
    //     if(selectedId){
    //         axios.get("http://localhost:8080/students/" + selectedId)
    //         .then((res)=>{ 
    //             let u = res.data.student;
    //             setUser(u);

    //             //pre fill value
    //             setFormData({
    //                 name: u.name || "",
    //                 email: u.email || "",
    //                 password: u.password || "",
    //                 image: null,
    //                 oldImage: u.image || ""
    //             })
    //         }).catch((err)=>{
    //             console.error(err)
    //         })
    //     }else{
    //         // reset form when adding new
    //         setFormData({
    //             name: "",
    //             email: "",
    //             image: null,
    //              oldImage: "",
    //         });
    //     }
    //  }, [selectedId])

     
    const handleChange = (event)=>{
        setFormData((data)=> {
            return {...data, [event.target.name]: event.target.value}
        })
    }


    const handleFileChange = (event)=>{
        console.log(event.target.files);

        setFormData((data)=>{
            return {...data, image: event.target.files[0]}
        })
    }

    // Handle Form Submit

    const handleSubmit = async (event)=>{
        event.preventDefault();

        const data = new FormData();

        data.append("name", formData.name);
        data.append("email", formData.email);
        data.append("password", formData.password);

        if(formData.image){
            data.append("image", formData.image);// field should match backend: req.files.image
        }

        if(selectedId){
            data.append("_id", selectedId);
            data.append("oldImage", formData.oldImage);
        }

        try{
            let res ;

            if(selectedId){
                //update
                res = await axios.put("http://localhost:8080/students/" + selectedId, data,{
                    headers: { "Content-Type": "multipart/form-data" },
                } )
            }else{
                // Create
                res = await axios.post("http://localhost:8080/students", data,{
                    headers: { "Content-Type": "multipart/form-data" },
                })
            }

        alert(res.data.msg || "Success!");

        }catch(err){
            console.error(err);
            alert("Operation failed!")
        }
    }

    return (
        <div  className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            {selectedId ? "Update Admin" : "Create Admin"}
         </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* name */}
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                 name
                </label>
                <input type="text" name="name" 
                // placeholder="Enter name"
                value={formData.name} 
                onChange={handleChange} 
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                </div>
                {/* email */}
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  email
                </label>
                <input type="email" 
                name="email" id=""
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                 />
                </div>

                {/* password */}
                <div>
                 <label className="block text-sm font-medium text-gray-700 mb-1">
                  password
                </label>
                <input type="password" 
                name="password" id=""
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                 />
                </div>

                {/* file */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        {selectedId ? "Upload New Image" : "Upload Image"}
                    </label>
                    <input 
                    type="file" 
                    className="w-full px-3 py-2 border rounded-lg shadow-sm bg-gray-50 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100"
                    name="image"
                    onChange={handleFileChange}
                    />
                </div>

                {/* submit */}
                <button 
                    type="submit" 
                    className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                >
                  {selectedId ? "Update" : "Create"}
                </button>
            </form>
        </div>
    )
}