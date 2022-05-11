// import React, { useState } from 'react'
// import { NavDropdown, Container, Nav, Navbar } from 'react-bootstrap'
// import { Link} from 'react-router-dom'
// import AddEvent from './AddEvent'

// const Navigation = () => {

//   // const [show, SetShow] = useState(false)
//   const[showModal, setShowModal] = useState(false)


//   return (
//     <>
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="#home">Event Tracker</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ml-auto">
//             <Link to="/add-event" className='nav-link' onClick={setShowModal(true)}>Add new Event</Link>
//             <Link to="/register" className='nav-link'>Register</Link>
//             <Link to="/login" className='nav-link'>Login</Link>
//             <NavDropdown title="Name" id="basic-nav-dropdown" >
//               <img alt='' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
//               <NavDropdown.Item >Action</NavDropdown.Item>
//               <NavDropdown.Item>Another action</NavDropdown.Item>
//               <NavDropdown.Item >Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item><button>Logout</button></NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//     {showModal && <AddEvent setShowModal={setShowModal}/>}
//     </>

//   )
// }

// export default Navigation

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AddEvent from './AddEvent'

const Navigation = ({ setShowModal }) => {

  // const[showModal, setShowModal] = useState(false)
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <div className="container-fluid">

          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse d-flex align-items-center" id="navbarSupportedContent">
            <Link to="/"><h2>EventTracker</h2></Link>
          </div>



          <div className="d-flex align-items-center">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <Link to="/login">
                <li className="nav-link">
                  Login
                </li>
              </Link>
              <Link to="/register">
                <li className="nav-link">
                  Register
                </li>
              </Link>
              <li className="nav-link" onClick={() => setShowModal(true)}>
                Add New Event
              </li>
            </ul>


            <div className="dropdown">
              <a
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a className="dropdown-item" href="#">My profile</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Settings</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Logout</a>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </nav>

    </>

  )
}

export default Navigation

