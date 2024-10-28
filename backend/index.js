const express=require('express');
const app=express();
const databaseconnection = require('./config/database');
const cookieParser=require('cookie-parser')
const dotenv=require('dotenv');
const cors=require('cors');

dotenv.config({
    path:".env"
})

databaseconnection()

const userRoutes=require('./routes/UserRoutes')
const tweetRoutes=require('./routes/tweetRoutes');


app.use(express.urlencoded({
    extended:true
}));
app.use(express.json())
app.use(cookieParser())

const corsOptions={
    origin:"http://localhost:3000",
    credentials:true
}

app.use(cors(corsOptions));

app.use(userRoutes)
app.use(tweetRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`server connected at ${process.env.PORT}`)
})