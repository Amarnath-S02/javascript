const express=require('express');
const app=express();

app.use(express.json());

const courses=[
    {id:1,name:"java"},
    {id:2,name:"javascript"},
    {id:3,name:"python"},
    {id:4,name:"c"},
    {id:5,name:"c++"},
]

app.get('/courses',(req,res)=>{
    res.send(courses)
})

// app.post('/courses',(req,res)=>{

// const course= {
// id:courses.length+1,
// name:req.body.name
// };

// courses.push(course);
// res.send(courses);
// });

// app.get('/courses/:coursename',(req,res)=>{
//     const course=courses.find(course=> course.name === req.params.coursename);
//     if(!course){
//        return res.status(400).send("course not available")
//     }

//     res.send(course)
// })


// app.put('/courses/:coursename',(req,res)=>{
//     const course=courses.find(course=> course.name === req.params.coursename);

//     course.name=req.body.name
//     res.send(course)
// });

app.delete('/courses/:coursename',(req,res)=> {
    const course=courses.filter(course=> course.name !== req.params.coursename)

    courses.push(course)
    res.send(courses)
})



const port=process.env.port || 3000

app.listen(port,()=>{
    console.log(`port is running on ${port}`)
})