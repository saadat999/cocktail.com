import React from 'react'
import { Routes, Route } from "react-router-dom"
import HomePage from '../pages/HomePage'
import SecondPage from '../pages/SecondPage'

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
    }
]
const AppRouter = () => {
    return (
        <Routes>
            {routes.map(({ path, component, key }) => {
                return <Route path={path} element={component} key={key}/> 
            })}
        </Routes>
    )
}

export default AppRouter