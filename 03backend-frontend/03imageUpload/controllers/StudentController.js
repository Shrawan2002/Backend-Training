const  StudentModel = require("../model/StudentModel");

class StudentController{
    imageUpload = (data, image)=>{
        return new Promise( async (resolve, reject)=>{
            try{
                const imgName = new Date().getTime() + Math.floor(Math.random()*1000) + image.name;
                const destination = `./public/image/${imgName}`;

                if(!image){
                    reject({msg: "Please Upload image", status: 0});
                }

                image.mv(
                    destination,
                    async(err)=>{
                        if(!err){
                            let result =  new StudentModel({
                                name: data.name,
                                email: data.email,
                                password: data.password,
                                image: imgName
                            })
                            
                            await result.save()
                            resolve({ msg: "image uploaded successfully", status: 1 });
                        }else{
                            reject({ msg: "Unable to upload image", status: 0 })
                        }
                    }
                )
            }catch(err){
                reject({msg: "Internal server error", status: 0});
            }
        })
    }
}

module.exports = StudentController;