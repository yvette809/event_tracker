import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const AddEvent = ({setShowModal}) => {

    const addEvent = async()=>{

    }
    return (
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={setShowModal(false)}>Close</Button>
                <Button variant="primary" onClick={addEvent}>Add Event</Button>
            </Modal.Footer>
        </Modal.Dialog>
    )
}

export default AddEvent