import React from 'react'
import {Routes, Route} from "react-router-dom"
import HomePage from '../pages/HomePage'


const routes = [
    {
        path:'/',
        component: <HomePage/>

    },
    {
        path: '',

    }
]
 const AppRouter = () => {
  return (
   <Routes>
    {routes.map(({path , component }) => {
        return <Route path='/' element={<HomePage/>}/>
    })}
   </Routes>
  )
}

export default AppRouter