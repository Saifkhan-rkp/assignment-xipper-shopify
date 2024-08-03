const express = require('express');
const router = require('./routes/router');




const app = express();

// unhandled rejection handler, error handler
process.on('unhandledRejection',(reason)=>{
    console.log(reason);
    process.exit(1);
});


// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// routes
app.use("/api",router);

// get '/' api
app.get('/',(req,res)=>{ res.status(200).send({success:true,message:"running..!"})});

// 404 handler
app.use((req,res,next)=>{
    const error = createError(404);
    next(error);
});

// next error handler
app.use((error,req,res,next)=>{
    console.log(error);
    if (!error.statusCode) {
        error.statusCode = 500;
    }
    res.statusCode = error.statusCode;
    res.send({
        success:false,
        message : error.message
    });
});


module.exports = app
