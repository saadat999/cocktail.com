import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router багыттоо хуксу
import './MenuPage.css';
import Header from '../UI/header/Header';

const MenuPage = () => {
  const [drinks, setDrinks] = useState([]);
  const [category, setCategory] = useState('Champagne_flute');
  const navigate = useNavigate(); // Багыттоо үчүн хук

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

  const renderDrinks = () => {
    return drinks.map(({ strDrink, strDrinkThumb, idDrink }) => (
      <div key={idDrink} className="card1" onClick={() => openIn(idDrink)}>
        <img src={strDrinkThumb} alt={strDrink} />
        <h1 id="price">$ {idDrink}</h1>
        <h3 id="name">{strDrink}</h3>
      </div>
    ));
  };

  const openIn = (idDrink) => {
    navigate(`/cocktail`); // React Router аркылуу багыттоо
    localStorage.setItem("id", idDrink)
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <>
      <Header />
      <div className='container'>
        <div className="menu">
          <div className="buttons">
            <button onClick={() => handleCategoryChange('Champagne_flute')} className={category === 'Champagne_flute' ? 'active' : 'btn1'}>Champagne Flute</button>
            <button onClick={() => handleCategoryChange('Cocktail_glass')} className={category === 'Cocktail_glass' ? 'active' : 'btn1'}>Cocktail Glass</button>
            <button onClick={() => handleCategoryChange('Collins_glass')} className={category === 'Collins_glass' ? 'active' : 'btn1'}>Collins Glass</button>
            <button onClick={() => handleCategoryChange('Beer_mug')} className={category === 'Beer_mug' ? 'active' : 'btn1'}>Beer Mug</button>
          </div>
        </div>
        <div className="cards">
          {renderDrinks()}
        </div>
      </div>
    </>
  );
};

export default MenuPage;
