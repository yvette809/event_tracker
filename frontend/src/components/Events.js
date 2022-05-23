import React from 'react'
import Loader from './Loader'
import { useSelector, useDispatch } from 'react-redux'
import SingleEvent from './SingleEvent'

const Events = ({ events, loading }) => {
    const dispatch = useDispatch()
    console.log('events =>', events)

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