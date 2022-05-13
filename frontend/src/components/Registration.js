import React, { useState } from 'react'
//import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { register } from '../actions/userActions'

import Message from '../components/Message'
import { useEffect } from 'react';


const Registration = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { loading, error, user } = useSelector(state => state.userLogin)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    image: ""
  })

  const [message, setMessage] = useState(null)

  useEffect(() => {
    if (user) {
      navigate("/")
    }
  })
  // const [error, setError] = useState(null)
  // const [token, setToken] = useState({})

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   try {

  //     if (formData.name.trim() === "" && formData.email.trim() === "" && formData.password.trim() === "") {
  //       setError('Fields cannot be empty')
  //     }

  //     const res = await axios.post('http://localhost:4010/users/register', formData)
  //     setFormData(res.data)
  //     console.log('user', res.data)
  //     setToken(res.data.token)
  //     localStorage.setItem('token', res.data.token)
  //     // alert('user registered')
  //     //navigate("/")
  //     console.log(token)

  //   } catch (error) {
  //     console.log(error)
  //     setError(error)
  //   }

  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(register(formData))

  }

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <>
      <h1 className='text-center'>Registration</h1>
      {message && <Message variant="danger">{message}</Message>}
      <form className='mt-4' onSubmit={handleSubmit}>

        <div className="">
          <label className="form-label" htmlFor="name">Name</label>
          <input type="name" id="name" className="form-control" name="name" value={formData.name} onChange={onChange} />

        </div>

        <div className="mb-4">
          <label className="form-label" htmlFor="email">Email address </label>
          <input type="email" id="email" className="form-control" value={formData.email} name="email" onChange={onChange} />

        </div>


        <div className="mb-4">
          <label className="form-label" htmlFor="password">Password</label>
          <input type="password" id="password" className="form-control" name="password" value={formData.password} onChange={onChange} />

        </div>

        <div className='mb-4'>
          {/* <input type="file" className="form-control" id="customFile" onDone={({ base64 }) => setFormData({ ...formData, selectedFile: base64 })} /> */}
          <FileBase type="file" multiple={false} onDone={({ base64 }) => setFormData({ ...formData, image: base64 })} />
        </div>



        {/* Submit button */}
        <button type="submit" class="btn btn-primary btn-block mb-4" onClick={handleSubmit}>Sign up</button>

      </form>

    </>
  )
}

export default Registration