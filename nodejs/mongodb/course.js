const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1/courses')

.then(data=>console.log("db Connected SuccesFully"))
.catch(error=>console.log(error))


const CourseSchema=new mongoose.Schema({
    name:{type:String,required:true},
    Creator:{type:String,required:true},
    iSPublised:Boolean,
    publishedDate:{type:Date,isDefault:Date.now},
    rating:{type:Number,required:true},
})


const Course=mongoose.model('Course',CourseSchema)

async function courseDetails(){
    const course=new Course({
        name:"python",
        
        iSPublised:true,
        rating:3
    })

    try{
        const result= await course.save();
        console.log(result)
    }
    catch(error){
        console.log(error)
    }

  
}

async function fetchCourse(){
    const course=await Course.find({name:"c++"})
    console.log(course)
}
// fetchCourse()

courseDetails()

//updateCourse
async function updateCourse(id) {
    const course=await Course.findById(id)
    course.name="java"
    course.Creator="Amarsk"

   const updatedCourse=course.save()
   console.log(updatedCourse)
    
}
//updateCourse('679dc3cef01e27a198774087')

//delete

async function deleteCourse(id){
    const course= await Course.findByIdAndDelete(id)
    console.log(course)
}

// deleteCourse('679dc3cef01e27a198774087')