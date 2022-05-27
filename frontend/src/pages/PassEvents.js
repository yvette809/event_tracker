import React, { useEffect } from 'react'
import Loader from '../components/Loader'
import { useSelector, useDispatch } from 'react-redux'
import { getEvents } from '../actions/eventActions'
import SingleEvent from '../components/SingleEvent'
import { useNavigate } from 'react-router-dom'

const PassEvents = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { events, loading } = useSelector(state => state.eventList)


    const sortedEvents = events.sort((a, b) => new Date(a.date) - new Date(b.date))

    useEffect(() => {
        dispatch(getEvents())
    }, [dispatch])

    return (
        <>
            <div className='my-4 text-center'><h2>Pass Events</h2></div>
            {loading && <Loader />}
            {sortedEvents.length > 0 ? sortedEvents.map(event => {
                let today = new Date().toISOString()
                if (event.date < today) {
                    return <SingleEvent event={event} key={event._id} />
                }
            }) : <div className='text-center evt'><h3>Events not found..</h3></div>}
        </>
    )
}

export default PassEvents