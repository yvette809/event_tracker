
const express = require('express')
const mongoose = require('mongoose')
const q2m = require("query-to-mongo")
const eventModel = require('./schema')
const { auth } = require('../../middleware/authMiddleware')

const eventRouter = express.Router()

// get all events

// eventRouter.get("/", async (req, res) => {
//     try {
//         const events = await eventModel.find()
//         if (events) {
//             res.status(200).send(events)
//         }

//         res.status(404).json({ msg: "events not found" })

//     } catch (error) {
//         console.log(error)

//     }
// })

// get events with pagination

// get events with pagination, filter
eventRouter.get("/", async(req,res,next)=>{
    try{
        const query = q2m(req.query);
        const events = await eventModel
        .find(query.criteria, query.options.fields)
        .skip(query.options.skip)
        .limit(query.options.limit)
        .sort(query.options.sort)
        res.send({
            data:events,
            total:events.length
        })

    }catch(error){
        next(error)
    }
})


// get event by id
eventRouter.get("/:id", async (req, res) => {
    try {
        const event = await eventModel.findById(req.params.id).populate('user', ['name', 'email', 'image'])
        if (event) {
            res.status(200).send(event)
        }

        res.status(404).json({ msg: `event with id : ${req.params.id} not found` })

    } catch (error) {
        console.log(error)

    }
})

// create event
// user must be logged in

eventRouter.post("/", auth, async (req, res) => {
    const { title, description, date, time } = req.body
    const event = new eventModel({
        title,
        description,
        date,
        time,
        user: req.user._id
    })

    await event.save()

    res.status(201).send('event created')

})

// delete event

eventRouter.delete("/:id", auth, async (req, res) => {

    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await eventModel.findByIdAndRemove(id)
    res.status(200).send('event deleted')
})








module.exports = eventRouter