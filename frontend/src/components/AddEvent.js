import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addEvent } from '../actions/eventActions'
import Message from './Message'

const AddEvent = ({ setShowModal }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { userInfo, error } = useSelector(state => state.userLogin)

    const [formData, setFormData] = useState({
        title: "",
        descripttion: "",
        date: "",
        time: ""

    })

    const { title, description, date, time } = formData


    const handleSubmit = (e) => {
        e.preventDefault()
        if (userInfo) {
            dispatch(addEvent({ title, description, date, time }))
            setShowModal(false)

        } else {
            navigate('/login')
        }


    }

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }


    return (
        <Modal.Dialog>
            <Modal.Header closeButton onClick={() => setShowModal(false)}>
                <Modal.Title>Add Event</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {error && <Message variant="primary">Fields Cannot be empty</Message>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="form-label" htmlFor="title">Title</label>
                        <input type="title" id="title" className="form-control" name="title" value={title} onChange={onChange} />

                    </div>

                    <div className="d-flex">
                        <div className="mb-4 me-3">
                            <label htmlFor="date">Date:</label>
                            <input type="datetime-local" id="date" name="date" value={date} onChange={onChange} />
                        </div>
                        {/* <div className='mb-4'>
                            <label htmlFor="time">Time: </label>
                            <input type="time" id="time" name="time" value={time} onChange={onChange} />
                        </div> */}
                    </div>

                    <div className="mb-4">
                        <label className="form-label" htmlFor="description" >Description</label>
                        <textarea className="form-control" id="description" rows="4" name="description" value={description} onChange={onChange}></textarea>

                    </div>
                </form>
            </Modal.Body>

            <Modal.Footer>

                <Button variant="primary" onClick={handleSubmit}>Add Event</Button>
            </Modal.Footer>
        </Modal.Dialog>
    )
}

export default AddEvent