import React, { useState } from 'react'
import "./SignUp.css"
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

function SignUp() {
    const [user, setUser] = useState({
        fullName: '',
        gender: '',
        age: '',
        email: '',
        password: '',
        profilePhoto: ''
    })


    const signup = async () => {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/signup`, {
            fullName: user.fullName,
            email: user.email,
            gender: user.gender,
            password: user.password,
            age: user.age,
            profilePhoto: user.profilePhoto
        })

        if (response.data.success) {
            toast.success(response.data.message)

            setUser({
                fullName: '',
                gender: '',
                age: '',
                email: '',
                password: '',
                profilePhoto: ''
            })
        }
        else {
            toast.error(response.data.success)
        }
    }


    return (
        <div>
            <h1 className='auth-heading'>Before you start please register first 🡆</h1>

            <form className='auth-form'>
                <label htmlFor="fullName" className='auth-form-heading'>Enter Username:</label>
                <input
                    type='text'
                    id="fullName"
                    placeholder='fullName'
                    className='user-input'
                    value={user.fullName}
                    onChange={(e) => {
                        setUser({ ...user, fullName: e.target.value })
                    }}
                />

                <label htmlFor='gender' className='auth-form-heading'>Enter gender:</label>
                <select
                    type='text'
                    id="gender"
                    placeholder='gender'
                    className='user-input  user-gender-input'

                    value={user.gender}
                    onChange={(e) => {
                        setUser({ ...user, gender: e.target.value })
                    }}
                >
                    <option>Male</option>
                    <option>Female</option>
                </select>

                <label htmlFor="age" className='auth-form-heading'>Enter age:</label>
                <input
                    type='number'
                    id="age"
                    placeholder='age'
                    className='user-input'
                    value={user.age}
                    onChange={(e) => {
                        setUser({ ...user, age: e.target.value })
                    }}
                />

                <label htmlFor="email" className='auth-form-heading'>Enter email:</label>
                <input
                    type='email'
                    id="email"
                    placeholder='email'
                    className='user-input'
                    value={user.email}
                    onChange={(e) => {
                        setUser({ ...user, email: e.target.value })
                    }}
                />

                <label htmlFor="password" className='auth-form-heading'>Enter password:</label>
                <input
                    type='password'
                    id="password"
                    placeholder='password'
                    className='user-input'
                    value={user.password}
                    onChange={(e) => {
                        setUser({ ...user, password: e.target.value })
                    }}
                />

                <label htmlFor="profile" className='auth-form-heading'>Upload a profile:</label>
                <input
                    type='file'
                    id="profile"
                    accept="image/*"
                    placeholder='Profile'
                    className='user-input'
                    value={user.profilePhoto}
                    onChange={(e) => {
                        setUser({ ...user, profilePhoto: e.target.value })
                    }}
                />

                <button
                    type='button'
                    className='auth-btn'
                    onClick={signup}>
                    Register
                </button>
            </form>

            {/* <Link to='/login'
            className='auth-link'>
                Already have an account?Login
            </Link> */}

            <Toaster />
        </div>
    )
}

export default SignUp