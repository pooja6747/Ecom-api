const Category = require('../Model/Category')

exports.getCategory = async(req,res)=>{
    try {
       const data = await Category.find(); 
    } catch (error) {
        return res.status(400).json({errros:true,massage:error.message})
    }
}

exports.postCategory = async(req,res)=>{
    try {
       const data = await Category.create(req.body); 
       return res.json({errros:false,data:data})
    } catch (error) {
        return res.status(400).json({errros:true,massage:error.message})
    }
}

