import React from 'react'
import './Header.css'
import { SiBuymeacoffee } from "react-icons/si"
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div className='aback'>
      <div className="container head">
        <div className='tracking-in-expand'>
          cocktail <br />corner
        </div>
        <div className="switches">
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/menu'}>Menu</NavLink>
          <NavLink to={'/randompage'}>Random</NavLink>
        </div>
        <div className='cart'>
          <NavLink to='/cart' style={{background: 'transparent'}}>
            <SiBuymeacoffee size={34} color='black' >
              <span>cart</span>
            </SiBuymeacoffee>
          </NavLink>

        </div>



      </div>
    </div>
  )
}

export default Header
