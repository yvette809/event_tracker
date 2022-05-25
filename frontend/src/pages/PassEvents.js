import React, { useEffect } from 'react'
//import Loader from './Loader'
import { useSelector, useDispatch } from 'react-redux'
import { getEvents } from '../actions/eventActions'
import SingleEvent from '../components/SingleEvent'
import { useNavigate } from 'react-router-dom'

const PassEvents = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { events, loading } = useSelector(state => state.eventList)
    console.log('events =>', events)

    const sortedEvents = events.sort((a, b) => new Date(a.date) - new Date(b.date))

    return (
        <>
            <div className='my-4 text-center'><h2>Pass Events</h2></div>
            {sortedEvents.map(event => {
                let today = new Date().toISOString()

                console.log('today', today)
                console.log('event-date', event.date)
                if (event.date < today) {
                    return <SingleEvent event={event} key={event._id} />
                }
            })}
        </>
    )
}

export default PassEvents