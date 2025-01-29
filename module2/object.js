//object is collection of unordered key value pair and key value pair is called property

// key:string  value=number,string,array,function

//every object in javascript descrtipe a diffrent entity and property

var person={
    firstname:"amar",
    lastname:"S",
    age:23,
    favrt_Actor:"thanush",
    friends:["prak","edi","vig","maara"],
    address:{
        house_no:33,
        city:{
            name:'palani',
            village:'V V',
            pincode:624618
        }
    }

    
};


console.log(person.address.city.name)
console.log(person.favrt_movie="pollathavan")
console.log(person.friends[2])


delete person.age
console.log(person)