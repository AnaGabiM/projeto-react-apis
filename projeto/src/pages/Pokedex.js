import { useState, useEffect } from "react";
import { CardsContainer } from "../styles";
import PokedexCard from "../components/PokemonCard/PokedexCard";


export default function Pokedex ({listCards, setListCards}) {
    
    function removeCard (id) {
        const newList = listCards.filter((item) => item.id !== id);
        setListCards(newList)
    }

    return (
        <CardsContainer>
            {listCards.map((poke) => {
                return <PokedexCard
                key={poke.id}
                pokemon={poke}
                types={poke.types}
                id={poke.id}
                removeCard={removeCard} />
            })}
        </CardsContainer>
    )
}