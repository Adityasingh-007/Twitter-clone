const { default: mongoose } = require("mongoose");

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        // unique:true
    },
    paassword:{
        type:String,
        required:true
    },
    followers:{
        type:Array,
        default:[],
    },
    following:{
        type:Array,
        default:[],
    },
    bookmarks:{
        type:Array,
        default:[],
    }
},{timestamps:true})

const User=new mongoose.model('User',UserSchema)
module.exports=User