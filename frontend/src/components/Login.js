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

    const { loading, error, userInfo } = useSelector(state => state.userLogin)

    const [formData, setFormData] = useState({
        email: "",
        password: "",

    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.email.trim() !== "" && formData.password.trim !== "") {
            dispatch(login(formData))
            alert('user loggein')
        }


    }

    // const [error, setError] = useState(null)
    // const [token, setToken] = useState({})

    // console.log(token, error)

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     try {

    //         if (formData.email.trim() === "" && formData.password.trim() === "") {
    //             setError('Fields cannot be empty')
    //         }

    //         const res = await axios.post('http://localhost:4010/users/login', formData)
    //         setFormData(res.data)
    //         console.log('user', res.data)
    //         setToken(res.data.token)
    //         localStorage.setItem('token', res.data.token)
    //         // alert('user registered')
    //         // navigate("/")

    //     } catch (error) {
    //         console.log(error)
    //         setError(error)
    //     }

    // }

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });
    return (
        <div className="container">
            <h1 className='text-center'>Sign In</h1>
            {/* {error && <Message>fields can't be empty</Message>} */}
            {loading && <Loader />}
            <form className='mt-4' onSubmit={handleSubmit}>

                <div className="form-outline mb-4">
                    <input type="email" id="email" className="form-control" name="email" value={formData.email} onChange={onChange} />
                    <label className="form-label" htmlFor="email">Email address</label>
                </div>


                <div className="form-outline mb-4">
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