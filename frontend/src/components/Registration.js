import React, { useState } from 'react'
//import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { register } from '../actions/userActions'
import Loader from '../components/Loader'
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



  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(register(formData))
    navigate("/login")

  }

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <>
      <h1 className='text-center mt-3'>Registration</h1>
      {loading && Loader}
      {/* {error && <p className='error'>{error}</p>} */}
      <form className='mt-2 reg-form' onSubmit={handleSubmit}>
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

        <div className="text-center">
          <p className='text-white'>Already have an account? <Link to="/login" className='login'>Login </Link></p>

        </div>

      </form>

    </>
  )
}

export default Registration