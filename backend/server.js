const express = require ('express')
const mongoose = require ('mongoose')
const cors = require ('cors')
const dotenv = require ('dotenv')
const { urlencoded } = require('express')

const server = express()
dotenv.config()

server.use(cors)

//init middleware
server.use(express.json({ extended: false }))
server.use(express.urlencoded({ extended: false }))

const PORT = process.env.PORT
const mongo_uri = process.env.MONGO_URI

// connect to database
mongoose.connect(mongo_uri, {useNewUrlParser:true, useUnifiedTopology:true})
.then((server.listen(PORT, ()=> console.log(`server is running on port ${PORT}`))))
.catch(error=> console.log(error))