const dbConnect = require('./mongodb') 

const insert = async ()=>{
    const db = await dbConnect()
    const result = await db.insertMany(
        [
        {
            name: 'maxy',
            email: 'maxy@gmail.com',
            age: 75,
        },
        {
            name: 'rosisky',
            email: 'rosisky@gmail.com',
            age: 75,
        },{
            name: 'bonucci',
            email: 'bonucci@gmail.com',
            age: 75,
        }
    ]
        
    )
    if(result.acknowledged){
        console.log("Data is inserted");
    }
}
insert()