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
        date: ""

    })

    const { title, description, date } = formData


    const handleSubmit = (e) => {
        e.preventDefault()
        if (userInfo) {
            dispatch(addEvent({ title, description, date }))
            setShowModal(false)

        } else {
            navigate('/login')
        }


    }

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }


    return (
        <div className='m-container'>
            <Modal.Dialog className='modal-side' >
                <Modal.Header closeButton onClick={() => setShowModal(false)}>
                    <Modal.Title className="title">Add Event</Modal.Title>
                </Modal.Header>

                <Modal.Body className='m-body'>
                    {error && <Message variant="primary">Fields Cannot be empty</Message>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="form-label  text-white fw-bolder" htmlFor="title">Title</label>
                            <input type="title" id="title" className="form-control" name="title" value={title} onChange={onChange} />

                        </div>

                        <div className="d-flex">
                            <div className="mb-4 me-3  text-white">
                                <label htmlFor="date" className="me-1 fw-bolder">Date:</label>
                                <input className="form-control" type="datetime-local" id="date" name="date" value={date} onChange={onChange} />
                            </div>

                        </div>

                        <div className="mb-4">
                            <label className="form-label text-white fw-bolder" htmlFor="description" >Description</label>
                            <textarea className="form-control" id="description" rows="4" name="description" value={description} onChange={onChange}></textarea>

                        </div>
                    </form>
                </Modal.Body>

                <Modal.Footer>

                    <Button onClick={handleSubmit} className="btn-modal">Add Event</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>

    )
}

export default AddEvent