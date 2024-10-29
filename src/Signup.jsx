import React from 'react'
import './sign.css';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <form className='signup'>
        <h2>Sign Up</h2>
        <div className='sign1'>
            <label>UserName</label><br></br>
            <input className='input' placeholder='Enter UserName'></input>
        </div>
        <div className='sign2'>
            <label>Email</label><br></br>
            <input className='input' placeholder='Enter Email'></input>
        </div>
        <div className='sign3'>
            <label>Password</label><br></br>
            <input className='input' placeholder='Enter Password'></input>
        </div>
        <Link to='/'>
        <button className='btn-signup'>Signup</button></Link>
    </form>    
  )
}

export default Signup