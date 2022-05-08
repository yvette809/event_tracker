import React, { useState } from 'react'
import { NavDropdown, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AddEvent from './AddEvent'

const Navigation = () => {

  // const [show, SetShow] = useState(false)
  const[showModal, setShowModal] = useState(false)

  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Event Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/add-event" className='nav-link' onClick={setShowModal(true)}>Add new Event</Link>
            <Link to="/register" className='nav-link'>Register</Link>
            <Link to="/login" className='nav-link'>Login</Link>
            <NavDropdown title="Name" id="basic-nav-dropdown" >
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
              <NavDropdown.Item >Action</NavDropdown.Item>
              <NavDropdown.Item>Another action</NavDropdown.Item>
              <NavDropdown.Item >Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><button>Logout</button></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     {showModal && <AddEvent setShowModal={setShowModal}/>} 
    
    </>
    
  )
}

export default Navigation