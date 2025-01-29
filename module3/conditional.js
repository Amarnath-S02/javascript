//ifelse

var score=35

if(score<55){
    console.log("dummy p**")
}

// for loop

var arr=[1,2,3,4,5,6]

for(var i=0;i<arr.length;i++)
{
    console.log("array elements:",arr[i])
}


//dowhile

while(score>40){
   console.log("ahile loop")
}

// for in loop

var colors={
    primary:"blue",
    secondary:"yellow"
}

for (var colour in colors){
    console.log("for in loop",colour,'->',colors[colour])
}


var nationalaward=["aadakalam","asuren"]
console.log("for of loop:")
for(var award of nationalaward)
{
    console.log(award)
}


var numbers = [1, 2, 3, 4, 5];

for (var [index,number] of numbers.entries()) {
  console.log(index,"-.>",number+5);
}