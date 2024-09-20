import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import CocktailApi from './CocktailApi'; // API менен иштөө үчүн
import  '../api/cocktail'

const CocktailList = () => {
  const { id } = useParams(); // Маршруттан ID алуу
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    const fetchCocktailDetails = async () => {
      const data = await cocktail.fetchCocktailDetails(id);
      setCocktail(data.drinks[0]);
    };
    fetchCocktailDetails();
  }, [id]);

  if (!cocktail) return <div>Loading...</div>;

  return (
    <div className="cocktail-details">
      <h2>{cocktail.strDrink}</h2>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <h3>Ингредиенттер:</h3>
      <ul>
        {Object.keys(cocktail).map((key) => {
          if (key.startsWith("strIngredient") && cocktail[key]) {
            return <li key={key}>{cocktail[key]}</li>;
          }
          return null;
          
        })}
      </ul>
    </div>
  );
};

export default CocktailList;
