import express from 'express'
import studentRouter from './routers/studentRoutes.js'
import cors from 'cors'

import connectDb from './database.js'

const app=express();


const port=8000;
app.use(cors())

app.use(express.json())
app.get('/', (req, res, next) => {
    res.json({msg: 'hello world!'})
})



app.listen(port, function() {
    console.log("Server is running on port:" + port);
});

app.use('/students',studentRouter);

const con = await connectDb()
console.log(`${con.connection.host} \nMongoDB Connected`)

