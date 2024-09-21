import React from 'react'
import './Hero.css'
import { Carousel } from 'antd';



const contentStyle = {
  color: 'black',
  lineHeight: '160px',
  textAlign: 'center',
};
const Hero = () => {
  return ( 
      <div className='container banner'>

        <Carousel autoplay>
          {/* <div className='banner'> */}
            <div>
              <img className='banner-img' id='img' src={'/src/assets/c4.jpeg'} style={contentStyle} alt="Cocktail 1" />
              <img className='banner-img' id='img' src={'/src/assets/c4.jpg'} style={contentStyle} alt="Cocktail 1" />
            </div>
            <div>
              <img className='banner-img' id='img' src={'/src/assets/c2.png'} style={contentStyle} alt="Cocktail 2" />
            </div>
            <div>
              <img className='banner-img' id='img' src={'/src/assets/c3.jpeg'} style={contentStyle} alt="Cocktail 3" />
            </div>
            <div>
              <img className='banner-img' id='img' src={'/src/assets/c1.jpeg'} style={contentStyle} alt="Cocktail 4" />

              <img className='banner-img' id='img' src={'/src/assets/c3.jpg'} style={contentStyle} alt="Cocktail 3" />
            </div>
            <div>
              <img className='banner-img' id='img' src={'/src/assets/c1.avif'} style={contentStyle} alt="Cocktail 4" />

            </div>

          {/* </div> */}

         
        </Carousel>
      </div>

  )
}

export default Hero