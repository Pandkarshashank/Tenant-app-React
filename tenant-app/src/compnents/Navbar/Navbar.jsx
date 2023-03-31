import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../asssets/logo.png'

export default function Navbar() {
  return (
    <div>
        <nav className='navbar has-shadow'>
            <div class="icon icon is-large fas fa-check-square m-3">
              <Link to='/' className='navbar-item'  ><img src={logo} alt="logo"></img></Link>
            </div>
            <Link to='/' className='navbar-item'  >Home</Link>
            <Link to='/complaint' className='navbar-item' >Complaint</Link>
            <Link to='/view' className='navbar-item' >View</Link>
            <div className='navbar-end px-3 py-3'>
            <Link to='/Signin' className='navbar-item' >SignIn</Link>
            <Link to='/Signup' className='navbar-item' >SignUp</Link>
        </div>
      </nav>
    </div>
  )
}
