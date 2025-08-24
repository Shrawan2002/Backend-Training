const AdminModel = require("../models/AdminModel");

class AdminController{
    adminPagination = (page,limit)=>{
        return new Promise( async (resolve,reject)=>{
            try{
                const pageNum = parseInt(page) || 1;
                const limitNum = parseInt(limit) || 10;

                const skip = (pageNum -1) * limitNum;
                const admins = await AdminModel.find().skip(skip).limit(limitNum);
                if(admins){
                    resolve({
                        msg : "admins fetched",
                        data : admins,
                        page : pageNum,
                        limit : limitNum,
                        total : await AdminModel.countDocuments()
                        // DeprecationWarning: Collection.count() is deprecated. Use countDocuments or estimatedDocumentCount.
                    })
                }
            }catch(err){
                console.log(err.message);
                reject({msg : "Internal server error", status : 0})
            }
        })
    }

    adminSorting = (sortBy, order)=>{
        return new Promise(async (resolve, reject)=>{
            try{
                const result = await AdminModel.find().sort({[sortBy]: order});
                resolve({
                msg : `Admins sorted by ${sortBy} in ${order === 1 ? "ascending" : "descending"}`,
                data : result
            });
            }catch(err){
                reject({
                    msg : "Internal server error",
                    status : 0
                })
            }
        })
    }

    adminFilter = (category, minValue, maxValue)=>{
        return new Promise(async (resolve,reject)=>{
            try{

                // Add Category in dataBase 

            // const docs = await AdminModel.find().limit(6);
            // const ids = docs.map((doc)=> doc._id);
            // let result = await AdminModel.updateMany(
            //     {_id : {$in :ids}},
            //     {$set :{category : "admin"}});

            // const docs = await AdminModel.find().skip(6).limit(10);
            // const ids = docs.map((doc)=> doc._id);
            // const result = await AdminModel.updateMany(
            //     {_id : {$in : ids}},
            //     {$set : {category : "superAdmin"}}
            // )

            let min = parseInt(minValue);
            let max = parseInt(maxValue);

            let filter = {};
            filter.category = category;

            if(min & max){
                filter.password = {
                    $gt : min,
                    $lt: max
                }
            }
            // console.log("inside controller :", category)

        //     const result = await AdminModel.find({
        //         category: category,
        //         password: { $gt: min, $lte: max }
        //    });

            const result = await AdminModel.find(filter);
            console.log(result);
            resolve({
                data : result,
            });

            }catch(err){
                 reject({
                    msg : "Internal server error",
                    status : 0
                     })
                }
        })
    }
}

module.exports = AdminController;