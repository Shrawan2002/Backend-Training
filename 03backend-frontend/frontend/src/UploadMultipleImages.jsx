import { useState } from "react"

export default function UploadMultipleImages() {
    let [formData, setFormData] = useState({
        name: "",
        email: "",
    })

    let [images, setImages] = useState([]);

    handleInputChange = (event)=>{
        setFormData((formData)=>{
            return {...formData, [event.target.name]: event.target.value}
        })
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center"> Upload Multiple Images</h2>
                {/* name */}
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Name</label>
                    <input type="text"
                    value={formData}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    name="name"/>
                </div>

                {/* email */}
                <div className="mb-4"> 
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                     name="email" />
                </div>

                {/* images */}
                 <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Image</label>
                    <input 
                    type="file"
                    multiple
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
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