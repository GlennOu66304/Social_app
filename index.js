const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')



const app = express()
app.use(express.json());
app.use(helmet())
app.use(morgan('common'))

const apiRoute = require('./routes/api')
const usersRoute = require('./routes/users')

dotenv.config()
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Connected to Mangodb")
});

// basic url

app.get('/', function (req, res) {
    res.send('Hello World!')
})

//api url routes
app.use('/api', apiRoute)
app.use('/users', usersRoute)

app.listen(8800, () => {
    console.log("Back end server 8800 is running!")
})