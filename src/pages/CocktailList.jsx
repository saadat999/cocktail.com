
import React, { useEffect, useState } from 'react'

const CocktailList = () => {
  const id = localStorage.getItem('id')
  const [data, setData] = useState([])
  console.log(data, '----------usestate----------');
  

  const base_url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
  useEffect(() => {
    fetchCategory()
  }, [])

  const fetchCategory = () => {
    fetch(base_url + id)
      .then(res => res.json())
      .then(res => {
        console.log(res, '-----------data----------------');
        setData(res.drinks)

      })
  }

  return (
    <div>
      {data.map(el => {
        return (
          <div>
            <h1>названия: {el.trDrink}</h1>
            <img src={el.strDrinkThumb} alt="" />
            <h1>класс: {el.strGlass}</h1>
            <h1>Инструкция: {el.strInstructions}</h1>

          </div>
        )

      })}
    </div>
  )
}

export default CocktailList