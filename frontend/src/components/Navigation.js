

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
      <nav className="navbar navbar-expand-lg navbar-light ">

        <div className="container-fluid nav-container">
          <div className="collapse navbar-collapse d-flex align-items-center">
            <Link to="/" className='text-white '><h2><span className="text-info">E-</span>Tra<span className="text-info">c</span>ker</h2></Link>
          </div>

          <div className="d-flex align-items-center">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">

              <li className="nav-link add-event" onClick={() => setShowModal(true)}>
                Add New Event
              </li>

            </ul>


            <div className="dropdown ">
              <Link
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                to="/"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                {image ? <img src={image} className="rounded-circle"
                  alt="user image"
                  height="25"
                  loading="lazy"
                /> : <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy" />}

              </Link>

              {userInfo.token ? (

                <ul
                  className="dropdown-menu dropdown-menu-end items-dropdown"
                  aria-labelledby="navbarDropdownMenuAvatar"
                >
                  <li>
                    <Link className="dropdown-item" to="/">{name && name}</Link>
                  </li><hr />
                  <li>
                    <Link className="dropdown-item " to="/">{email && email}</Link><hr />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/pass-events" >
                      Pass Events
                    </Link>
                  </li><hr />
                  <li>
                    <Link className="dropdown-item" to="/login" onClick={logUserOut}>Logout</Link>
                  </li>

                </ul>
              ) : (
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuAvatar"
                >
                  <li>
                    <Link className="dropdown-item" to="/pass-events" >
                      Pass Events
                    </Link>
                  </li><hr />
                  <li>
                    <Link className="dropdown-item " to="/login">Login</Link>
                  </li>

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
