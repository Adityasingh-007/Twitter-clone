const { default: mongoose } = require("mongoose");


const tweetSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    like:{
        type:Array,
        default:[]
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
    
},{timestamps:true})

const Tweet=new mongoose.model("Tweet",tweetSchema)

module.exports=Tweet