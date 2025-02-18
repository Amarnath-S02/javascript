const morgan=require('morgan')

const express=require('express')

const app=express();
app.use(morgan());

let myPromise= new Promise(function (resolve,rejected){
    const success=true;
 setTimeout(()=>{
    if(!success){
        resolve("resolved")
    }
    else{
        rejected("rejected")
    }
},2000)
console.log('promise ')

})

console.log(myPromise)

myPromise
.then((data)=>{
 console.log(data)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=> console.log("finally block"))