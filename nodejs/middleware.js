 function middleware(req,res,next){
    console.log("middleware is running")
    next()
 }


 module.exports=middleware;