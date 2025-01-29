const express = require('express');
const app = express();

app.use(express.json()); // Middleware should be set up here.

const courses = [
    {id: 1, name: "javascript"},
    {id: 2, name: "python"},
];

app.get('/', (req, res) => {
    res.send("hello");
});

// Route parameters
app.get('/about/:id', (req, res) => {
    res.send(req.params.id);
});

// Handling parameters
app.get('/courses/:coursename', (req, res) => {
    const course = courses.find(course => course.name === req.params.coursename);

    if (!course) {
        res.status(404).send('your course is not available');
        return;
    }
    
    res.send(course);
});

// Post method
app.post('/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(course);
    res.send(courses);
});

// Put method
app.put('/course/:coursename', (req, res) => {
   let course = courses.find(course => course.name === req.params.coursename);

    if (!course) {
        res.status(404).send("course not found");
        return;
    }

    course.name = req.body.name;
    res.send(course);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`app is running on port ${port}`);
});
