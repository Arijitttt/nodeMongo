const mongoose = require('mongoose')

const saveInDB = async ()=>{
    await mongoose.connect("mongodb://127.0.0.1/Map")
    const ProductSchema = new mongoose.Schema({
        name:String,
        email:String,
        age:Number,
    })
    const productModel=mongoose.model('data1',ProductSchema)
    let data=new productModel({
        name:"subhman",
        email:"subhman@gmail.com",
        age:22
    })
    let result = await data.save()
    console.log(result);
}



const updateInDB=async ()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/mongoose");
    const productSchema=mongoose.Schema({
        name:String,
        email:String,
        age:Number,
        
    });
    const product =mongoose.model('connections',productSchema);
    let data=await product.updateOne(
        {name:"virat"},
        {
            $set:{email:"virat@gmail.com", age:34}
        }
    )
    console.log(data);
}

const deleteInDB=async ()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/Map");
    const productSchema=mongoose.Schema({
        name:String,
        email:String,
        age:Number,
        
    });
    
    const product =mongoose.model('data1',productSchema);
    let data=await product.deleteOne({name:"rohit"});
    console.log(data);
}


const findInDB=async ()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/Map");
    const productSchema=mongoose.Schema({
        name:String,
        price:Number,
        brand:String,
        category:String
    });
    
    const product =mongoose.model('data1',productSchema);
    let data=await product.find({name:"subhman"});
    console.log(data);
}
findInDB()
