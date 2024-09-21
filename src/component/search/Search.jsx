import React, { useEffect, useState } from 'react';
import { Input } from 'antd';
import './Search.css';
import cocktail from '../../api/cocktail'

const { Search: AntSearch } = Input;

const Search = () => {
  const [letter, setLetter] = useState('')
  const [data, setData] = useState([])
  const searChLet = () => {
    console.log(letter);

    const fetchSearch = async () => {
      const response = await cocktail.fetchSearchLet(letter)
      console.log(response);
      setData(response.drinks)

    }
    fetchSearch()

  }



  return (
    <>
      <div className='search container'>
        <h3 className='search-title'>hghbj</h3>
        <p className='search-p'>vfj</p>
        <input onChange={(e) => setLetter(e.target.value)} type="text" placeholder='Ищите...' />
        <button onClick={() => {
          searChLet()
        }}>Искать</button>
      </div>
      {data.map(el => {
        return (
          <div className='container'>
            <h1 className='name'>{el.strCategory}</h1>
            <img className='card' src={el.strDrinkThumb} alt="" />
          </div>
        )
      })}
    </>
  );
};

export default Search;