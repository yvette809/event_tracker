import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getEventById } from '../actions/eventActions'
import Moment from 'react-moment'
import axios from 'axios'

const EventDetails = () => {

    const dispatch = useDispatch()
    const { event } = useSelector(state => state.eventDetails)
    const { id } = useParams()


    useEffect(() => {
        dispatch(getEventById(id))
    }, [dispatch, id])



    return (

        <div className='container mt-5 '>
            <div className='event-container'>
                <p>Title: {event.title}</p>
                <div>
                    <p> Date: <Moment format="DD/MM/yyyy">{event.date}</Moment></p>
                    <p> Time: <Moment fromNow>{event.date}</Moment></p>
                </div>
                <p>Description: {event.description}</p>


            </div>
            <div className='d-flex justify-content-end mt-3 text-white'>
                Created By : {event.user && event.user.name}
            </div>
        </div>
    )
}

export default EventDetails