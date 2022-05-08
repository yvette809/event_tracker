import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import FileBase from 'react-file-base64';

import Message from '../components/Message'


const Registration = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    image: ""
  })

  const [error, setError] = useState(null)
  const [token, setToken] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {

      if (formData.name.trim() === "" && formData.email.trim() === "" && formData.password.trim() === "") {
        setError('Fields cannot be empty')
      }

      const res = await axios.post('http://localhost:4010/users/register', formData)
      setFormData(res.data)
      console.log('user', res.data)
      setToken(res.data.token)
      localStorage.setItem('token', res.data.token)
      // alert('user registered')
      navigate("/")

    } catch (error) {
      console.log(error)
      setError(error)
    }

  }

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <>
      <h1 className='text-center'>Registration</h1>
      {error && <Message variant="danger">{error}</Message>}
      <form className='mt-4' onSubmit={handleSubmit}>
        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <input type="name" id="name" className="form-control" name="name" value={formData.name} onChange={onChange} />
              <label className="form-label" htmlFor="name">Name</label>
            </div>
          </div>
        </div>


        <div className="form-outline mb-4">
          <input type="email" id="email" className="form-control" value={formData.email} name="email" onChange={onChange} />
          <label className="form-label" htmlFor="email">Email address </label>
        </div>


        <div className="form-outline mb-4">
          <input type="password" id="password" className="form-control" name="password" value={formData.password} onChange={onChange} />
          <label className="form-label" htmlFor="password">Password</label>
        </div>

        <div className='mb-4'>
          {/* <input type="file" className="form-control" id="customFile" onDone={({ base64 }) => setFormData({ ...formData, selectedFile: base64 })}  /> */}
          <FileBase type="file" multiple={false} onDone={({ base64 }) => setFormData({ ...formData, image: base64 })} />
        </div>

        {/*  <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div> */}

        {/* Submit button */}
        <button type="submit" class="btn btn-primary btn-block mb-4" onClick={handleSubmit}>Sign up</button>

      </form>

    </>
  )
}

export default Registration