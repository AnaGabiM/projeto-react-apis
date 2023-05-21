import { useState, useEffect, useContext } from "react";
import { CardsContainer } from "../styles";
import PokemonCard from "../components/PokemonCard/PokemonCard";
import { GlobalContext } from "../context/GlobalContext";


export default function Pokedex () {
    const context = useContext(GlobalContext)
    const { listCards, removeCard} = context;
    
    return (
        <CardsContainer>
            {listCards.map((poke) => {
                return <PokemonCard
                key={poke.id}
                pokemon={poke}
                types={poke.types}
                id={poke.id}
                removeCard={removeCard} />
            })}
        </CardsContainer>
    )
}