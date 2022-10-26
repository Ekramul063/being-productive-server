const express = require('express');
const app = express();
var cors = require('cors')
const port = process.env.PORT || 5000;
const courses = require('./data/courses.json');
app.use(cors())

app.get('/',(req,res)=>{
    res.send('test server')
})
app.get('/courses',(req,res)=>{
    res.send(courses)
})
app.get('/course/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const selectedItem = courses.find(course => course.id === id);
    res.send(selectedItem); 
})

app.listen(port,()=>{
    console.log('site running')
})