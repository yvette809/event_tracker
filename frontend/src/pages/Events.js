import React from 'react'
import Loader from '../components/Loader'

const Events = ({ events, loading }) => {


    return (
        <>
            <h1>My Events</h1>

            {loading && <Loader />}
            {Events.length > 0 ? (<>My events</>) : (<h1>Events not found</h1>)}
        </>
    )
}

export default Events