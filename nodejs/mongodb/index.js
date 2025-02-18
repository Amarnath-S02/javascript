const mongoose=require('mongoose')

mongoose.connect("mongodb://127.0.0.1/testData")

.then(data=> console.log("connected successfully"))
.catch(error=> console.log("could not connected",error));


//schema

const courseSchema=new mongoose.Schema({
    name:String,
    creator:String,
    publisedDate:{type:Date,default:Date.now},
    isPublished:Boolean
})


const Course= mongoose.model('Course',courseSchema)

async function courseDetails(){

const course= new Course({
    name:"C",
    creator:"Amar",
    isPublished:true,
})
const result= await course.save()
console.log(result)
}

//fetch

async function fetchCourse(){
    const courses=await Course.find({creator:"Amar"})
    console.log(courses)


}

//update

async function UpdateCourse(id){
    const course=await  Course.findById(id)
   if(!course) return;

    course.name="c++"
    course.creator="skamar"

   const updatedCourse=course.save()
   console.log(updatedCourse)
}

UpdateCourse('679db0b1e3f22e391e89ecbb')
// fetchCourse()


//delete

async function deleteCourse(id){
    const course=await Course.findByIdAndDelete(id)
    console.log(course)
    console.log("deleted successfully")
}

deleteCourse('679db5155975d5e707584f7a')