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

        <>
            <p className='my-3'>You can now see details of your events {event.user && event.user.name} !</p>
            <div className='event_details'>
                <p>{event.title}</p>
                <p>{event.description}</p>
                <p>{event.date}.toString()</p>
                <p>{event.time}</p>
            </div>
        </>
    )
}

export default EventDetails