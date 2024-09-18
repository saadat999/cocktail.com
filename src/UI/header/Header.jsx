import React from 'react'
import './Header.css'
import { SiBuymeacoffee } from "react-icons/si"
const Header = () => {
  return (
    <div className='aback'>
      <div className="container head">
        <div className='logo'>
          cocktail <br />corner
        </div>
        <div className="switches">
          <a href="">home</a>
          <a href="">menu</a>
          <a href="">pages</a>
          <a href="">ingridients</a>
        </div>
        <div className='cart'>
          <SiBuymeacoffee >
            <span>cart</span>
          </SiBuymeacoffee>

        </div>



      </div>
    </div>
  )
}

export default Header