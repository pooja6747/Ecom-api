
//initilization
const express = require('express') 
const mongoose = require('mongoose')
const productRoute = require('./Route/productRoute')
const categoryRoute = require('./Route/cateogoryRoute')
require('dotenv/config')

//declaration
const app = express();

//middleware
app.use(express.json())

//default route
app.get('/',(req,res)=>{
    res.send("this is home");
})

//main route
app.use('/api/product',productRoute)
app.use('/api/category',categoryRoute)

app.listen(process.env.PORT,()=>{
console.log('Running on 5000')
})

async function db(){
    try {
        const response = await mongoose.connect(process.env.DB)
        const data = await response.default
        console.log(data.STATES['connected'])


        
    } catch (error) {
        console.log(error.message)
    }
}

db()


