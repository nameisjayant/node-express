const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config();

const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString);
const database = mongoose.connection
const app = express()
const routes = require('./routes/route')

app.use(express.json());
app.use('/api',routes)


app.listen(3000,()=>{
    console.log("listening to port 3000...")
})

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})