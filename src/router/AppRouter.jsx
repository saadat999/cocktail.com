import React from 'react'
import {Routes, Route} from "react-router-dom"
import HomePage from '../pages/HomePage'
import SecondPage from '../pages/SecondPage'
import MenuPages from '../pages/MenuPage'
import CocktailList from '../pages/CocktailList'


const routes = [
    {
        path:'/',
        component: <HomePage/>,
        key: 'homepage'
    },
    {
        path: '/about',
        component: <SecondPage/>,
        key: 'second'
    },
    {
        path: '/menu',
        component: <MenuPages/>,
        key: 'menu'
    },
    {
        path: '/cocktail',
        component: <CocktailList/>,
        key: 'cocktail'
    }
]
 const AppRouter = () => {
  return (
   <Routes>
    {routes.map(el  => {
        return <Route path={el.path} element={el.component} key={el.key}/>
    })}
   </Routes>
  )
}

export default AppRouter