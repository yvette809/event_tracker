import React, { useEffect } from 'react'
import Loader from './Loader'
import { useSelector, useDispatch } from 'react-redux'
import { getEvents } from '../actions/eventActions'
import SingleEvent from './SingleEvent'

const Events = () => {
    const dispatch = useDispatch()
    const { events, loading } = useSelector(state => state.eventList)
    console.log('events =>', events)

    useEffect(() => {
        dispatch(getEvents())
    }, [dispatch])

    if (loading) {
        return <Loader />
    }

    return (

        <>
            <h1 className='my-4'>My Events</h1>

            {events.length > 0 ? events.map(event => {
                return (
                    <SingleEvent event={event} key={event._id} />
                )
            })
                : (
                    <h1>Events not found..</h1>)}
        </>
    )
}

export default Events