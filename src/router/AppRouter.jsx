import React from 'react'
import { Routes, Route } from "react-router-dom"
import HomePage from '../pages/HomePage'
import SecondPage from '../pages/SecondPage'
import MenuPages from '../pages/MenuPage'
import CocktailList from '../pages/CocktailList'

const routes = [
    {
        path: '/',
        component: <HomePage />,
        key: 'homepage'
    },
    {
        path: '/secondpage',
        component: <SecondPage />,
        key: 'secondpage'
    },
    {
        path: '/menu',
        component: <MenuPages />,
            key: 'menu'
    },
    {
    path: '/cocktail',
        component: <CocktailList />,
            key: 'cocktail'
    }
]
const AppRouter = () => {
    return (
        <Routes>
            {routes.map(({ path, component, key }) => {
                return <Route path={path} element={component} key={key} />
            })}
        </Routes>
    )
}

export default AppRouter