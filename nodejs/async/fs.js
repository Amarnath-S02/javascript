const fs=require('fs');

let data=fs.readFileSync('x.txt','utf8')

    console.log(data);
  
fs.readFile('xy.txt', fun)

function fun(err,data){
    if(err){
        console.log("error")
    }

    else{
        console.log(data.toString())
        fs.readFile('xyz.txt', fun2)
    }

}

function fun2(err,data){
    if(err){
        console.log("error")
    }

    else{
        console.log(data.toString())
        
    }

}