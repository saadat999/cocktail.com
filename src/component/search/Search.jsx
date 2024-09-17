// import React from 'react'
// import { Input } from 'antd'
// import './Search.css'

// const { Search: AntSearch } = Input

// const Search = () => {
//   return (
//     <div className='search container'>
//         <h3 className='search-title'>hghbj</h3>
//         <p className='search-p'>vfj</p>
//         <div id='my-input'>
//             <AntSearch
//             placeholder='Search...'
//             allowClear onSearch={() = {
//                 console.log('search');
//             }} />
//         </div>
//     </div>
//   )
// }

// export default Search

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
    <div className='search container'>
      <h3 className='search-title'>hghbj</h3>
      <p className='search-p'>vfj</p>
      <input onChange={(e) => setLetter(e.target.value)} type="text" placeholder='Ищите...' />
      <button onClick={() => {
        searChLet()
      }}>Искать</button>
      {data.map(el => {
        return (
          <div>
            <h1>{el.strCategory}</h1>
            <img src={el.strDrinkThumb} alt="" />
          </div>
        )
      })}

    </div>
  );
};

export default Search;
