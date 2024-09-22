import React, { useEffect, useState } from 'react';  
import { Input } from 'antd';  
import './Search.css';  
import cocktail from '../../api/cocktail'  
import { CiSearch } from 'react-icons/ci';
  
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
    <div className='fil'>  
      <div className='search container'>  
        <input className='input' onChange={(e) => setLetter(e.target.value)} type="text" placeholder='Find...' />  
        <button className='shadow-drop-2-left' onClick={() => {  
          searChLet()  
        }}><CiSearch size={20}/></button>  
      </div>  
      {data.map(el => {  
        return (  
           <div className="container">  
            <div className="puff-in-center">  
  
            <div className='coontainer'>  
 
              <h1 className='name'>{el.strCategory}</h1>  
 
              <img className='puff-in-center' src={el.strDrinkThumb} alt="" />  
            </div>  
            </div>  
              
           </div>  
           
        )  
      })}  
    </div>  
  );  
};  
  
export default Search;