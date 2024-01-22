require('dotenv').config()
const express = require('express');
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL).then(() => console.log('db connected'))
.catch(err => console.log(err));

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(3000, () => 
console.log('Server Started'))