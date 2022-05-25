import React, { useEffect } from 'react'
import Loader from './Loader'
import { useSelector, useDispatch } from 'react-redux'
import { getEvents } from '../actions/eventActions'
import SingleEvent from './SingleEvent'
//import Moment from 'react-moment'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

const Events = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { events, loading } = useSelector(state => state.eventList)
    console.log('events =>', events)

    const sortedEvents = events.sort((a, b) => new Date(a.date) - new Date(b.date))

    useEffect(() => {
        dispatch(getEvents())
    }, [dispatch])

    if (loading) {
        return <Loader />
    }

    return (

        <>
            <h2 className='my-4 text-center'>My Events</h2>

            {sortedEvents.length > 0 ? sortedEvents.map(event => {
                let today = new Date().toISOString()

                console.log('today', today)
                console.log('event-date', event.date)
                if (event.date >= today) {
                    return <SingleEvent event={event} key={event._id} />
                }
            }) : <div className='text-center evt'><h3>Events not found..</h3></div>}
        </>
    )
}

export default Events