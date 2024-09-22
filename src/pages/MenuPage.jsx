import React, { useState, useEffect } from 'react'; 
import { NavLink, useNavigate } from 'react-router-dom';  
import './MenuPage.css'; 
import Header from '../UI/header/Header'; 
import Search from '../component/search/Search'; 
import Footer from '../UI/footer/Footer';
 
const MenuPage = () => { 
  const [drinks, setDrinks] = useState([]); 
  const [category, setCategory] = useState('Champagne_flute'); 
  const navigate = useNavigate();  
 
  const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?g='; 
 
  useEffect(() => { 
    fetchDrinks(); 
  }, [category]); 
 
  const fetchDrinks = () => { 
    fetch(`${baseUrl}${category}`) 
      .then((response) => response.json()) 
      .then((data) => setDrinks(data.drinks)) 
      .catch((error) => console.error('Error fetching data:', error)); 
  }; 
  const fetchId = (id) => { 
    const cart = JSON.parse(localStorage.getItem('cart')) || []; 
   
    cart.push(id); 
   
    localStorage.setItem('cart', JSON.stringify(cart)); 
  }; 
 
  const renderDrinks = () => { 
    return drinks.map(({ strDrink, strDrinkThumb, idDrink }) => ( 
      <div className="open"> 
 
      <div className='card-menu'> 
        <div key={idDrink} className="card1" onClick={() => openIn(idDrink)}> 
          <img src={strDrinkThumb} alt={strDrink} /> 
          <p id="price">$ {idDrink}</p> 
          <h3 id="name">{strDrink}</h3> 
        </div> 
          <button class="button"  onClick={() => { 
            fetchId(idDrink) 
          }}> <span>Add to cart</span></button> 
      </div> 
      </div> 
    )); 
  }; 
 
  const openIn = (idDrink) => { 
    navigate(`/cocktail`); 
    localStorage.setItem("id", idDrink) 
  }; 
 
  const handleCategoryChange = (newCategory) => { 
    setCategory(newCategory); 
  }; 
 
 
  return ( 
    <> 
      <Header /> 
      <Search/> 
      <div className='container'> 
        <div className="div"> 
 
        <div className="menu"> 
          <div className="buttons"> 
            <button onClick={() => handleCategoryChange('Champagne_flute')} className={category === 'Champagne_flute' ? 'active' : 'btn1'}>Juice</button> 
            <button onClick={() => handleCategoryChange('Cocktail_glass')} className={category === 'Cocktail_glass' ? 'active' : 'btn1'}>Cocktail Glass</button> 
            <button onClick={() => handleCategoryChange('Collins_glass')} className={category === 'Collins_glass' ? 'active' : 'btn1'}>Collins Glass</button> 
            <button onClick={() => handleCategoryChange('Beer_mug')} className={category === 'Beer_mug' ? 'active' : 'btn1'}>Beer Mug</button> 
          </div> 
        </div> 
        <div className="cards"> 
          {renderDrinks()} 
        </div> 
        </div> 
      </div> 
      <Footer/>
    </> 
  ); 
}; 
 
export default MenuPage;