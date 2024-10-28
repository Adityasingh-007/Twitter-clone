const jwt=require('jsonwebtoken')

const dotenv=require('dotenv');
dotenv.config({
    path:".env"
})


module.exports.isAuthenticated=async (req,res,next)=>{
    try{

        const token=req.cookies.token;
        // console.log(token)
        if(!token){
            return res.status(401).json({
                message:"user not authenticated",
                success:true
            })
        }

        const decode=jwt.verify(token,process.env.SECRET_KEY)
        // console.log(decode)
        req.user=decode.userId
        next();
    }
    catch(err){
        console.log(err)
    }
}