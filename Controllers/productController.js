const Product = require('../Model/Product')

exports.getProduct = async(req,res)=>{
    try {
       const data = await Product.find(); 
    } catch (error) {
        return res.status(400).json({errros:true,massage:error.message})
    }
}

exports.postProduct = async(req,res)=>{
    try {
       const data = await Product.create(req.body); 
       return res.json({errros:false,data:data})
    } catch (error) {
        return res.status(400).json({errros:true,massage:error.message})
    }
}

