import React from 'react'
import "./SignUp.css"

function SignUp() {
    return (
        <div>
            <h1 className='auth-heading'>Before you start please register first 🡆</h1>

            <form className='auth-form'>
                <input
                    type='text'
                    placeholder='Enter fullName'
                    className='user-input'
                />

                <input
                    type='text'
                    placeholder='Enter Gender'
                    className='user-input'
                />

                <input
                    type='number'
                    placeholder='Enter Age'
                    className='user-input'
                />

                <input
                    type='email'
                    placeholder='Enter Email'
                    className='user-input'
                />

                <input
                    type='password'
                    placeholder='Enter Password'
                    className='user-input'
                />

                <input
                    type='text'
                    placeholder='Profile'
                    className='user-input'
                />

                <button
                    type='button'
                    className='auth-btn'>
                    Register
                </button>
            </form>
        </div>
    )
}

export default SignUp