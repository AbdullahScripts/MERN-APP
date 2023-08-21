const express = require('express')
const colors=require('colors')
const { route } = require('./routes/goalRoutes')
const {errorHandler}=require('./middleware/errorMiddleware')
// connect database 
const connectDb=require('./config/db')

const dotenv = require('dotenv').config()

const port= process.env.PORT || 5000

connectDb()

const app=express()

// to get value from user 
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/goals',require('./routes/goalRoutes'))
app.use('/api/users',require('./routes/userRoutes'))

// handle error 

app.use(errorHandler)

app.listen(port, () => console.log(`server started on port ${port}`))