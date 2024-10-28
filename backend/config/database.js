const mongoose=require('mongoose');

const dotenv=require('dotenv')

dotenv.config({
    path:"../config/.env"
})
const databaseconnection=()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("db connected")
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports=databaseconnection