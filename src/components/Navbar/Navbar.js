import React from 'react'
import './Navbar.css';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='left-section'>
      <img alt='logo' className='logo'/>
        <div>
            <ul className='navbar-list'>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>Home&Living</li>
                <li>Beauty</li>
                <li>Studio</li>
            </ul>
        </div>
      </div>
      <div className='icons'>
        <img alt='profile_icon'/>
        <img alt='wishlist_icon'/>
        <img alt='bag_icon'/>
      </div>
      <button className='navbar-btn'>Signup</button>
    </div>
  )
}

export default Navbar