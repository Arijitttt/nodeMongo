const dbConnect = require('./mongodb')

const updateData = async ()=>{
    let data = await dbConnect()
    let result = await data.updateMany(
        {name:'classen'},{$set:{name:'de cock', age:32 }}
    )
    console.log(result);
}

updateData()