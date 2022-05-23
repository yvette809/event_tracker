import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Moment from 'react-moment'
import axios from 'axios'

const EventDetails = () => {

    const [event, setEvent] = useState({})
    const eventId = useParams().id

    const getEventDetails = async (id) => {
        const res = await axios.get(`http://localhost:4010/events/${id}`)
        console.log("res", res.data)
        setEvent(res.data)

    }

    useEffect(() => {
        getEventDetails(eventId)
    }, [eventId])

    console.log('eventdetails', event)

    return (

        <div className='container'>
            <p className='my-3'>You can now see details of your events {event.user && event.user.name} !</p>
            <div className='event_details'>
                <p>{event.title}</p>
                <p>{event.description}</p>
                <p> <Moment format="DD/MM/yyyy">{event.date}</Moment></p>
                <p>  <Moment fromNow>{event.date}</Moment></p>
            </div>
            <div className='d-flex justify-content-end mt-3'>
                Created By : {event.user && event.user.name}
            </div>
        </div>
    )
}

export default EventDetails