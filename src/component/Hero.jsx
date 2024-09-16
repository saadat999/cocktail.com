import React from 'react'
import './Hero.css'

import { Carousel } from 'antd'



const contentStyle = {
  height: '160px',
  color: 'black',
  lineHeight: '160px',
  textAlign: 'center',
};
const Hero = () => {
  return (
    <>
      <div className='container'>

        <Carousel autoplay>
          <div>
            <img className='LALA' id='img' src={'/src/assets/cocktail1.jpg'} style={contentStyle} alt="Cocktail 1" />
          </div>
          <div>
            <img className='LALA' id='img' src={'/src/assets/cocktail2.jpg'} style={contentStyle} alt="Cocktail 2" />
          </div>
          <div>
            <img className='LALA' id='img' src={'/src/assets/cocktail3.jpg'} style={contentStyle} alt="Cocktail 3" />
          </div>
        </Carousel>
      </div>
    </>
  )
}

export default Hero