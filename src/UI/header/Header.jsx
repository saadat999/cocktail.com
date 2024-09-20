import React from 'react'
import './Header.css'
import { SiBuymeacoffee } from "react-icons/si"
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div className='aback'>
      <div className="container head">
        <div className='logo'>
          cocktail <br />corner
        </div>
        <div className="switches">
          <NavLink to={'/'}>home</NavLink>
          <NavLink to={'/menu'}>menu</NavLink>
          <NavLink to={'/secondpage'}>pages</NavLink>
          <NavLink to={'/cocktail'}>ingridients</NavLink>
        </div>
        <div className='cart'>
          <NavLink to='/cart'>
            <SiBuymeacoffee size={34} >
              <span>cart</span>
            </SiBuymeacoffee>
          </NavLink>

        </div>



      </div>
    </div>
  )
}

export default Header