import React, { useEffect } from 'react'
import Loader from './Loader'
import { useSelector, useDispatch } from 'react-redux'
import { getEvents } from '../actions/eventActions'
import SingleEvent from './SingleEvent'
//import Moment from 'react-moment'
import moment from 'moment'


const Events = () => {
    const dispatch = useDispatch()
    const { events, loading } = useSelector(state => state.eventList)
    // console.log('events =>', events)

    const sortedEvents = events.sort((a, b) => new Date(a.date) - new Date(b.date))

    useEffect(() => {
        dispatch(getEvents())
    }, [dispatch])

    if (loading) {
        return <Loader />
    }

    return (

        <div>
            <h2 className='my-4 text-center'>My Events</h2>

            {loading && <Loader />}
            {sortedEvents.length > 0 ? sortedEvents.map(event => {
                let today = new Date().toISOString()

                if (event.date >= today) {
                    return <SingleEvent event={event} key={event._id} />
                }
            }) : <div className='text-center evt'><h3>Events not found..</h3></div>}
        </div>
    )
}

export default Events