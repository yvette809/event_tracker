import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
//import axios from 'axios'
import { login } from '../actions/userActions'
import Message from './Message'
import Loader from './Loader'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const [formData, setFormData] = useState({
        email: "",
        password: "",

    })

    const { email, password } = formData

    const { loading, error, userInfo } = useSelector(state => state.userLogin)


    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(login(email, password))
        navigate("/")


        formData.password = ""
        formData.email = ""


    }

    // if(userInfo){
    //     navigate("/")
    // }

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    return (
        <div className="container">
            <h1 className='text-center'>Sign In</h1>
            {error && <Message>fields can't be empty</Message>}
            {loading && <Loader />}
            <form className='mt-4' onSubmit={handleSubmit}>

                <div className=" mb-4">
                    <input type="email" id="email" className="form-control" name="email" value={formData.email} onChange={onChange} />
                    <label className="form-label" htmlFor="email">Email address</label>
                </div>


                <div className="mb-4">
                    <input type="password" id="password" className="form-control" name="password" value={formData.password} onChange={onChange} />
                    <label className="form-label" htmlFor="password">Password</label>
                </div>

                <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

                <div className="text-center">
                    <p>Not a member? <Link to="/register">Register </Link></p>

                </div>
            </form>
        </div>
    )
}

export default Login