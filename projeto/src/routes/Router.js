import React from "react"
import Home from "../pages/HomePage"
import Pokedex from "../pages/Pokedex"
import Details from "../pages/Details"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "../components/Header/Header"
import { useState } from "react"

export default function Router () {
    const [listCards, setListCards] = useState([])
    console.log(listCards)

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<Home
                    listCards={listCards}
                    setListCards={setListCards} />}/>
                <Route path="/myPokedex" element={<Pokedex 
                    listCards={listCards}
                    setListCards={setListCards}/>}/>
                <Route path="/details" element={<Details />}/>
            </Routes>
        
        </BrowserRouter>
    )
}