const express = require('express');
const app = express();
const morgan = require('morgan');
const middle = require('./middleware'); // Assuming you have a middleware file

app.use(express.json()); // Middleware for JSON parsing
app.use(morgan('tiny')); // Logging middleware
app.use(middle); // Custom middleware

let courses = [
    { id: 1, name: "java" },
    { id: 2, name: "javascript" },
    { id: 3, name: "python" },
    { id: 4, name: "c" },
    { id: 5, name: "c++" },
];

// ✅ Get all courses
app.get('/courses', (req, res) => {
    res.send(courses);
});

// ✅ Get a single course by name
app.get('/courses/:coursename', (req, res) => {
    const course = courses.find(course => course.name === req.params.coursename);
    if (!course) {
        return res.status(400).send("Course not available");
    }
    res.send(course);
});

// ✅ Add a new course
app.post('/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

// ✅ Update a course name
app.put('/courses/:coursename', (req, res) => {
    let course = courses.find(course => course.name === req.params.coursename);
    if (!course) {
        return res.status(404).send("Course not found");
    }

    course.name = req.body.name;
    res.send(course);
});

// ✅ Delete a course
app.delete('/courses/:coursename', (req, res) => {
    const filteredCourses = courses.filter(course => course.name !== req.params.coursename);
    
    if (filteredCourses.length === courses.length) {
        return res.status(404).send("Course not found");
    }

    courses = filteredCourses;
    console.log("Course deleted successfully");
    res.send(courses);
});

// ✅ Server setup
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
