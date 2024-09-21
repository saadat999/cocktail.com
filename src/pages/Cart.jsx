import React, { useEffect, useState } from 'react';

const Cart = () => {
    const [data, setData] = useState([]);
    const ids = JSON.parse(localStorage.getItem('cart')) || [];
    const base_url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responses = await Promise.all(
                    ids.map(id => fetch(base_url + id).then(res => res.json()))
                );

                const drinksData = responses.map(res => res.drinks[0]);
                setData(drinksData); 
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
            }
        };

        if (ids.length > 0) {
            fetchData();
        }
    }, [ids]);

    const deleteCart = (id) => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedCart = cart.filter(item => item !== id);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setData(data.filter(item => item.idDrink !== id)); 
    };

    return (
        <div className='container'>
            {data.length > 0 ? (
                data.map((el, index) => (
                    <div key={index}>
                        <h1>{el.strDrink}</h1>
                        <img src={el.strDrinkThumb} alt={el.strDrink} />
                        
                        <button onClick={() => deleteCart(el.idDrink)}>Удалить</button>
                    </div>
                ))
            ) : (
                <p>Ваша корзина пуста.</p>
            )}
        </div>
    );
};

export default Cart;
