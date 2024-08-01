import React from 'react'

function Login() {
  return (
    <div>
    <h1 className='auth-heading'>Before you start please Login first 🡆</h1>

    <form className='auth-form'>
        

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

        <button
            type='button'
            className='auth-btn'>
            Login
        </button>
    </form>
</div>
  )
}

export default Login