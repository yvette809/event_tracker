import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

const SingleEvent = ({ event }) => {

    return (

        <Link to={`/events/${event._id}`}>
            <div className='events'>
                <p>{event.title}</p>
                <p>  <Moment fromNow>{event.date}</Moment></p>
            </div>
        </Link>

        // <Link to={`/events/${event._id}`}> <p className='events'>{event.title}</p></Link>

    )
}

export default SingleEvent