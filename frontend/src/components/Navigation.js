
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../actions/userActions'


const Navigation = ({ setShowModal }) => {

  const { userInfo } = useSelector(state => state.userLogin)
  const { name, email, image } = userInfo
  console.log('userInfo=>', userInfo)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logUserOut = () => {
    dispatch(logOut())
    navigate("/login")

  }


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

              <li className="nav-link add-event" onClick={() => setShowModal(true)}>
                Add New Event
              </li>
              <Link to="/pass-events">
                <li className="nav-link" >
                  Pass Events
                </li>
              </Link>
            </ul>


            <div className="dropdown">
              <a
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="!#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                {image ? <img src={image} className="circle"
                  alt="user image"
                /> : <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy" />}
                {/* <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                /> */}
              </a>

              {userInfo ? (

                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuAvatar"
                >
                  <li>
                    <Link className="dropdown-item" to="/">{name && name}</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">{email && email}</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/" onClick={logUserOut}>Logout</Link>
                  </li>
                </ul>
              ) : (
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuAvatar"
                >
                  <Link to="/login">
                    <li className="nav-link">
                      Login
                    </li>
                  </Link>
                </ul>

              )}

            </div>
          </div>

        </div>

      </nav>

    </>

  )
}

export default Navigation
