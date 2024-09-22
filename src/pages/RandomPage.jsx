import React, { useContext, useEffect, useState } from 'react'
import Header from '../UI/header/Header';
import Footer from '../UI/footer/Footer';
import './RandomPage.css'
import { LiaSmileWinkSolid } from 'react-icons/lia';

const RandomPage = () => {
  const [data, setData] = useState([])

  const base_url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'
  useEffect(() => {
    fetch(base_url)
      .then(res => res.json())
      .then(res => {
        console.log(res, '--------------second------------');
        setData(res.drinks.slice(0, 50))
        
      })
  }, [])
  return (
    <>
      <Header />
      <div className='container'>
        <h1 className='title1'>For your energy <span><LiaSmileWinkSolid color='brown' size={34} /></span></h1>
        <div style={{ marginBottom: '10px', marginTop: '100px', display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>

          {data.map((el, index) => {
            return (
              <div className='random' key={index}>

                <img src={el.strDrinkThumb} />
                <p>{el.strDrink}</p>
                <p>{el.idDrink}</p>
              </div>
            )
          })}
        </div>

      </div>
      <Footer />
    </>
  )
}

export default RandomPage