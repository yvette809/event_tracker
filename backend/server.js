const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const { urlencoded } = require('express')
const userRouter = require('./src/routes/users/')
const eventRouter = require('./src/routes/events/')

const server = express()
dotenv.config()

server.use(cors())

//init middleware
// server.use(express.json({ extended: false }))
// server.use(express.urlencoded({ extended: false }))
server.use(express.json({ limit: "30mb", extended: true }))
server.use(express.urlencoded({ limit: "30mb", extended: true }))

// routes
server.use("/users", userRouter)
server.use("/events", eventRouter)


// env variables
const PORT = process.env.PORT
const mongo_uri = process.env.MONGO_URI

// connect to database
// mongoose.connect(mongo_uri, {useNewUrlParser:true, useUnifiedTopology:true})
// .then((server.listen(PORT, ()=> console.log(`server is running on port ${PORT}`))))
// .catch(error=> console.log(error))

mongoose
    .connect(mongo_uri
        ,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(
        server.listen(PORT, () => {
            console.log(`server running on port ${PORT}`);
        })
    )
    .catch((error) => console.log(error));