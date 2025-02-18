
function orderCoffe(order){
    return new Promise((resolve,reject)=>{

       resolve("order is received")
       if(!order){
        reject("rejected")
       }

    })
   
}

function process(order){
    return new Promise((resolve)=>{
       console.log("order is processed")
        resolve(`${order} is served`)
        
    })
    
}


async function serve(){
    let orderServed=await orderCoffe("cofee")
    console.log(orderServed)
    let process2=await process("coffee")
    console.log(process2)
    

}

serve()