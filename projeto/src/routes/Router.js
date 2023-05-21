import React from "react"
import Home from "../pages/HomePage"
import Pokedex from "../pages/Pokedex"
import Details from "../pages/Details/Details"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "../components/Header/Header"


export default function Router () {
    
    

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/myPokedex" element={<Pokedex/>}/>
                <Route path="/details" element={<Details />}/>
            </Routes>
        
        </BrowserRouter>
    )
}