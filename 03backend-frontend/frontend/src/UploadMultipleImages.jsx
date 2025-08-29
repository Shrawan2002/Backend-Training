import { useState } from "react"
import axios from "axios";
export default function UploadMultipleImages() {
    let [formData, setFormData] = useState({
        name: "",
        email: "",
    })

    let [images, setImages] = useState([]);
// handle input change
   let handleInputChange = (event)=>{
        setFormData((formData)=>{
            return {...formData, [event.target.name]: event.target.value}
        })
    }

    // handle file change
    let handleFile = (event)=>{
        setImages(event.target.files)
    }

//     let handleFile = (event) => {
//     setImages(Array.from(event.target.files));  // convert FileList → Array
// };

    // handle submit 
    let handleSubmit = async (event)=>{
        event.preventDefault()

        let data = new FormData()

        data.append("name", formData.name);
        data.append("email", formData.email);

        // append multiple files
        for(let i = 0; i<images.length; i++){
            data.append("images", images[i])
        }

        try{
            const res = await axios.post("http://localhost:8080/students/multUpload", data,{
                headers: {  "Content-Type": "multipart/form-data",}
            })

            console.log("upload success!", res);
            alert("image upload successfully!");
        }catch(err){
             console.error("Upload error:", err);
            alert("Image upload failed!");
        }
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form  onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center"> Upload Multiple Images</h2>
                {/* name */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Name</label>
                    <input type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    name="name"/>
                </div>

                {/* email */}
                <div className="mb-4"> 
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                     name="email" />
                </div>

                {/* images */}
                 <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Select Image</label>
                    <input 
                    type="file"
                    multiple
                    // accept="image/*" // → sirf images filter karta hai (jpg, png, gif, webp, etc).
                    onChange={handleFile}
                    className="w-full px-3 py-2 border rounded-lg shadow-sm bg-gray-50 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100"
                    name="images" />
                </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-black py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                    Upload
                  </button>
            </form>
        </div>
    )
}