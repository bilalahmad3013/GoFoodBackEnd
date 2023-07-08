const mongoose = require('mongoose')

// const url = `mongodb+srv://ba7254491:bilalahmad@cluster0.pixk3mk.mongodb.net/GoFoodMERN?retryWrites=true&w=majority`;
const url =`mongodb://ba7254491:bilalahmad@ac-8kxdnd0-shard-00-00.pixk3mk.mongodb.net:27017,ac-8kxdnd0-shard-00-01.pixk3mk.mongodb.net:27017,ac-8kxdnd0-shard-00-02.pixk3mk.mongodb.net:27017/GoFoodMERN?ssl=true&replicaSet=atlas-xnphvb-shard-0&authSource=admin&retryWrites=true&w=majority`

const mongoDB = async () => {

    await mongoose.connect(url)
        .then(async () => {
            console.log('Connected to the database ')
            const data = await mongoose.connection.db.collection("sample");
            const arr = await data.find({}).toArray();
            
            const data1=await mongoose.connection.db.collection("foodCategory");
            const arr1=await data1.find({}).toArray();

            global.foodItems=arr;
            global.foodCat=arr1;


        }).catch ( (err) => {
    console.error(`Error connecting to the database. n${err}`);
})
}
module.exports = mongoDB;


