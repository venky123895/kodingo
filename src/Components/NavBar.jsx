import React from 'react'
import './navbar.css'
const NavBar = () => {
  return (
    <div className='nav'>
      <div className="container">
      <div className="leftContainer">
            <h3 className='brand'>Koding made simple</h3>
        </div>
        <div className="rightContainer">
            <ul>
                <li>Bootstrap</li>
                <li>Themes</li>
                <li>Blog</li>
            </ul>
        </div>
      </div>
      <div className="body">
        <h1>Customized Boostrap Navbar</h1>
        <p>Easy way to change navbar background text and hover link color in bootstrap</p>
      </div>
    </div>
  )
}

export default NavBar