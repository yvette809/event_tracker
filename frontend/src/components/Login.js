import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: "",
        password: "",

    })

    const [error, setError] = useState(null)
    const [token, setToken] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            if (formData.email.trim() === "" && formData.password.trim() === "") {
                setError('Fields cannot be empty')
            }

            const res = await axios.post('http://localhost:4010/users/login', formData)
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
        <form className='mt-4' onSubmit={handleSubmit}>

            <div className="form-outline mb-4">
                <input type="email" id="email" className="form-control" name="email" value={formData.email} onChange={onChange} />
                <label className="form-label" htmlFor="email">Email address</label>
            </div>


            <div className="form-outline mb-4">
                <input type="password" id="password" class="form-control" name="password" value={formData.password} onChange={onChange} />
                <label className="form-label" htmlFor="password">Password</label>
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

            <div className="text-center">
                <p>Not a member? <Link to="/register">Register </Link></p>

            </div>
        </form>
    )
}

export default Login