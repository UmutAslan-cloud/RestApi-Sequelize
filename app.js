import express from 'express';
import path from 'path';

// Routers
import lecturesRouter from  './routes/lecture.js';
import teachersRouter from  './routes/teacher.js';
import studentsRouter from  './routes/students.js';

let app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use('/lectures', lecturesRouter);
app.use('/teachers', teachersRouter);
app.use('/students', studentsRouter);
/* app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); */


app.listen(3000, ()=>{
    console.log("listening on 3000");
});