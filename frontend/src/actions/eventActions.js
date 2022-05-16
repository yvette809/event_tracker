import axios from 'axios'
import {
    GET_EVENTS_REQUEST,
    GET_EVENTS_SUCCESS,
    GET_EVENTS_FAIL,
    CREATE_EVENT,
    GET_EVENTDETAILS_REQUEST,
    GET_EVENTDETAILS_SUCCESS,
    GET_EVENTDETAILS_FAIL
} from '../constants/eventConstants'


// add events

export const addEvent = (formData) => async (dispatch, getState) => {
    try {
        dispatch({
            type: GET_EVENTS_REQUEST
        })
        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        const { data } = await axios.post('http://localhost:4010/events', formData, config)

        dispatch({
            type: CREATE_EVENT,
            payload: data
        })

    } catch (error) {
        console.log(error)
        dispatch({
            type: GET_EVENTS_FAIL,
            payload: error
        })
    }


}


