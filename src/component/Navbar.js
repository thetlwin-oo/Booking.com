import React from 'react';
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbarContainer'>
            <span style={{ fontWeight : "bold" ,fontSize : 30 }}>Booking.com</span>
            <div className='navbarItem'>
                <button className='navButon'>Register</button>
                <button className='navButon'>Login</button>
            </div>

        </div>

    </div>
  )
}

export default Navbar