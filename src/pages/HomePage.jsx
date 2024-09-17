import React, { useContext, useEffect, useState } from 'react'
import Hero from '../component/Hero'
import Header from '../UI/header/Header'
import Footer from '../UI/footer/Footer'
import cocktail from '../api/cocktail'
import { DATA_CONTEXT } from '../context/AppContext'

const HomePage = () => {
    const [data, setData] = useState([])
    useEffect(() => {

        const fetchByCategory = async () => {
            const response = await cocktail.fetchSearch()
            console.log(response);
            setData(response.drinks.slice(1, 10))
        }
        fetchByCategory()
    }, [])

    return (
        <div>
            <Header />
            <Hero />
            {data.map(el => {
                return (
                    <div>

                        <h1>Названия: {el.strDrink}</h1>
                        <img src={el.strDrinkThumb} alt="" />

                    </div>
                )
})}
            <Footer />
        </div>
    )
}

export default HomePage