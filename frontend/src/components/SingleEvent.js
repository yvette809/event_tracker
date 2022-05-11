import React from 'react'
import { Link } from 'react-router-dom'

const SingleEvent = ({ event }) => {

    return (

        // <p className='events'>{event.title}</p>
        <Link to={`/events/${event._id}`}> <p className='events'>{event.title}</p></Link>

    )
}

export default SingleEvent