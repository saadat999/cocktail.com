import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='back'>
      <div className='container'>

        <div className="section">


          <div className="section2">
            <h2 className='section2-h2'>COCKTAIL CORNER</h2>
            <p className='section2-p'>A cocktail is a blend of flavors, aromas, and emotions in a glass. Each sip tells a unique story, transforming simple ingredients into a moment of enjoyment.
            </p>
          </div>
          <div className="div1">

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.8118771002514!2d74.58258377613497!3d42.855705271151166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9d3088356eb%3A0xb6b7beaa1240556a!2sAsia%20Mall!5e0!3m2!1sen!2skg!4v1726486698828!5m2!1sen!2skg"
              width="500"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <div className="div2">
            <h2 className='div2-h2'>COCKTAIL CORNER</h2>
            <a className='div2a' href="">3 Mir Ave, Bishkek</a>
            <a className='div2-h3' href="https://wa.me/553202772" target='_blank'>phone: <span>+996 502 528866</span></a>
            <a className='div2-h3' href="">website: <span> https://cocktail.com</span></a>
          </div>
        </div>
        <div className="div3">
          <p className='div3-p'>©2024 Cocktail Com All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer