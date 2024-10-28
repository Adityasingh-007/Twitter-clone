const express=require('express');
const { isAuthenticated } = require('../config/auth');
const User = require('../models/UserSchema');
const Tweet = require('../models/TweetSchema');
const router=express();


router.post('/create',isAuthenticated,async(req,res)=>{

    try{
    const{description,id}=req.body;

    if(!description||!id){
        return res.status(401).json({
            message:"Fields are required",
            success:false
        })
    }

    const user=await User.findById(id);

    if(!user){
        return res.status(401).json({
            message:"Invalid user",
            success:false
        })
    }
    console.log(user);

    const tweet=await Tweet.create({
        description:description,
        userId:id
    })
    console.log(tweet)
    return res.status(201).json({
        message:"Tweet created successfully",
        success:true
    })
}
catch(err){
    console.log(err);
}
})

router.delete('/delete/:id',isAuthenticated,async(req,res)=>{
    try{

        const {id}=req.params;

        await Tweet.findByIdAndDelete(id);

        return res.status(200).json({
            message:"Tweet deleted successfully",
            success:true
        })

    }
    catch(err){
        console.log(err)
    }
})

router.put('/like/:id',isAuthenticated,async (req,res)=>{
    try{

        // const loggedInUserId=req.body.id //error
        const loggedInUserId=req.user
        const tweetId=req.params.id;
        const tweet= await Tweet.findById(tweetId);

        if(tweet.like.includes(loggedInUserId)){
            await Tweet.findByIdAndUpdate(tweetId,{$pull:{like:loggedInUserId}})  // like array mai loggeInuserId daaldo

            return res.status(201).json({
                message:"user disliked your tweet",
                success:true
            })
        }
        else{
            await Tweet.findByIdAndUpdate(tweetId,{$push:{like:loggedInUserId}})
            return res.status(201).json({
                message:"user liked your tweet",
                success:true
            })
        }
        
    }
    catch(err){
        console.log(err)
    }
})


router.get('/alltweets/:id',isAuthenticated,async(req,res)=>{  //loggedInuser tweets +following tweets

    try{
    
    const id=req.params.id;

    const loggedInuser=await User.findById(id);

    const loggedInuserTweets=await Tweet.find({userId:id}) //use tweet.findById?

    const followingUserTweets= await Promise.all(loggedInuser.following.map((otherUserId)=>{
        return Tweet.find({userId:otherUserId});  //not necessary to add await here because Tweet.find will return a promise and promise.all waits for all those promises
    }))  // so followinguserTweets will contains array containing tweets  of following user
    

    return res.status(200).json({
        tweets:loggedInuserTweets.concat(...followingUserTweets)
    })
}
catch(err){
    console.log(err)
}
})

router.get('/followingtweets/:id',isAuthenticated,async(req,res)=>{

    try{

    const id=req.params.id;

    const loggedInuser= await User.findById(id);
        // console.log(loggedInuser)
        console.log(loggedInuser.following);
    const followingUserTweet= await Promise.all(loggedInuser.following.map((otherUserId)=>{

        return Tweet.find({userId:otherUserId});
    }))
    
    return res.status(200).json({
        tweets:[].concat(...followingUserTweet)
    })
    
}
    catch(err){
        console.log(err);
    }

})


module.exports=router