import React from 'react'
import './login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <form className='login-container'>
        <h2>Login</h2>
        <div className='log'>
            <label>Email</label><br></br>
            <input className='input' placeholder='Enter Email'></input>
        </div>
        <div className='log1'>
            <label>Password</label><br></br>
            <input className='input' placeholder='Enter Password'></input>
        </div>
        <Link to='/'>
        <button className='btn-login'>Login</button></Link>
        <h4>Agree to our Terms?
        <Link to='/Signup'>SignUp</Link></h4>

    </form>
  )
}

export default Login
