import React, { useEffect, useState } from 'react';
import './Cart.css'
import { LiaSmileBeam } from 'react-icons/lia';
import Header from '../UI/header/Header';
import Footer from '../UI/footer/Footer';
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
        <>
            <Header />

            <div className='container cartttttt'>
                {data.length > 0 ? (
                    data.map((el, index) => (
                        <div className='corzina' key={index}>

                            <h1 className='name-cart-card'>{el.strDrink}</h1>
                            <img className='in-cart' src={el.strDrinkThumb} alt={el.strDrink} />
                            <div className='btn-remove'>

                                <button className='remove' onClick={() => deleteCart(el.idDrink)}>remove</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Add something yummy <span><LiaSmileBeam size={24} color='brown' />
                    </span></p>

                )}
            </div>
            <Footer />
        </>
    );
};

export default Cart;
