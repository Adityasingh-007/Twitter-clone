const express=require('express');
const User = require('../models/UserSchema');
const router=express();
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const dotenv=require('dotenv');
const { isAuthenticated } = require('../config/auth');
dotenv.config({
    path:".env"
})


router.post('/register',async(req,res)=>{

    try{
    const {name,username,email,paassword}=req.body;

    if(!username||!email||!name||!paassword){
       return res.status(401).json({
            message:"All fields are required",
            success:false
        })
    }

    const user=await User.findOne({email})

    if(user){
       return res.status(401).json({
            message:"user already found",
            success:false
        })
    }

    const hashedPaassword=await bcrypt.hash(paassword, 16);
    
    await User.create({
        name:name,
        username:username,
        email:email,
        paassword:hashedPaassword
    })

    res.status(201).json({
        message:"You have succesfully created your account",
        success:true
    })
}
catch(error){
    console.log(error)
}
})


router.post('/login',async(req,res)=>{

    try{

    const {paassword,email}=req.body;

    if(!paassword||!email){
        return res.status(401).json({
            message:"All fields are required",
            success:false
        })
    }

    const user= await User.findOne({email})
    
    if(!user){
        return res.status(401).json({
            message:"incorrect email or paasword",
            success:false
        })
    }

    const isMatched=await bcrypt.compare(paassword,user.paassword)

    if(!isMatched){
        return res.status(401).json({
            message:"invalid username or paassword",
            success:false
        })
    }

    const tokenData={
        userId:user._id
    }

    const token = jwt.sign(tokenData,process.env.SECRET_KEY,{expiresIn:"1d"});
    // jwt.sign(payload,secret key,{expiresIn:"1d"});,payload contains claims bookmarks information about user


    res.status(201).cookie("token",token,{expiresIn:"1d",httpOnly:true}).json({
        message:`welcome back ${user.name}`,
        user,
        success:true
    })

}

catch(err){
    console.log(err);
}


})


router.post('/logout',async(req,res)=>{

    return res.cookie("token","",{expiresIn:new Date(Date.now())}).json({
        message:"user logged out successfully",
        successs:true
    })
})


router.put('/bookmark/:id',isAuthenticated,async(req,res)=>{
    try{

        const loggedInUserId=req.user //comes from isAuthenticated
        const tweetId=req.params.id;
        const user= await User.findById(loggedInUserId);

        if(user.bookmarks.includes(tweetId)){
            await User.findByIdAndUpdate(loggedInUserId,{$pull:{bookmarks:tweetId}})  // bookmarks array mai tweetId daaldo

            return res.status(201).json({
                message:"Tweet removed from bookmarks",
                success:true
            })
        }
        else{
            await User.findByIdAndUpdate(loggedInUserId,{$push:{bookmarks:tweetId}})
            return res.status(201).json({
                message:"Tweet Added to bookmarks",
                success:true
            })
        }
        
    }
    catch(err){
        console.log(err)
    }
})

// my profile or someones profile , render routes
router.get('/profile/:id',isAuthenticated,async(req,res)=>{

    try{

    const {id}=req.params;

    const user =await User.findById(id).select("-paassword");

    res.status(200).json({
        user
    })
}
catch(err){
    console.log(err);
}


})

router.get('/otheruser/:id',isAuthenticated,async(req,res)=>{
    try{
        const {id}=req.params;

        const otherUsers=await User.find({_id:{$ne:id}}).select("-paassword");

        if(!otherUsers){
            res.status(401).json({
                message:"users not found",
                success:false
            })
        }
        res.status(201).json({
            otherUsers
        })
    }
    catch(err){
        console.log(err)
    }
})

router.post('/follow/:id',isAuthenticated,async(req,res)=>{

    try{

    const userId=req.params.id;

    const loggedInuserId=req.user;

    const user= await User.findById(userId);

    const loggedInuser= await User.findById(loggedInuserId);

    if(!loggedInuser.followers.includes(user)){
        
       await loggedInuser.updateOne({$push:{following:userId}});  // push krna hai following array mai userId ko

       await user.updateOne({$push:{followers:loggedInuserId}})

    }
    else{
        res.status(401).json({
            message:"user is already followed",
        })
    }

    res.status(201).json({
        message:`${loggedInuser.username} succesfully followed ${user.username}`,
        success:true
    })

}
catch(err){
    console.log(err);
}


})

router.post('/unfollow/:id',isAuthenticated,async (req,res)=>{
    try{

        const userId=req.params.id;
    
        const loggedInuserId=req.user;
    
        const user= await User.findById(userId);
    
        const loggedInuser= await User.findById(loggedInuserId);
    
        if(loggedInuser.following.includes(userId)){
            
           await loggedInuser.updateOne({$pull:{following:userId}});  // push krna hai following array mai userId ko
    
           await user.updateOne({$pull:{followers:loggedInuserId}})
    
        } 
        else{
            res.status(400).json({
                message:"user is already ufollowed",
            })
        }
    
        res.status(401).json({
            message:`${loggedInuser.username} succesfully ufollowed ${user.username}`,
            success:true
        })
    
    }
    catch(err){
        console.log(err);
    }
})




module.exports=router;