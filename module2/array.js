//array initialization 

var arr=[1,"amar",true]
console.log(arr[0]);


console.log(arr.length)

arr[2]=false

console.log(arr)


//pre build method 

var arr2=[12,23,24,25,26]
console.log(arr2)


//pop

var c=arr2.pop()

console.log("pop:",c,arr2)

//push

var b=arr2.push(45)
console.log("push:",b,arr2)

//shift

var e=arr2.shift()
console.log("shift:",arr2)

//unshift
arr2.unshift(200)
console.log("unshift",arr2)