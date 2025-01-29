var a=30

var a=36
// redeclartion is allowed in var key word
console.log(a)

//scoping issues

console.log("variables declared with var keyword are not blocked they are function scoped:")
if(a===36)
{
    var b=80
    console.log(b)
}

console.log(b)

function test(){
    var c=90
    console.log(c)
}
test()
console.log(c)