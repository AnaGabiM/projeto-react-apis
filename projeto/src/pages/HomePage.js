import PokemonCard from "../components/PokemonCard/PokemonCard";
import { GlobalContext } from "../context/GlobalContext";
import { CardsContainer } from "../styles";
import { useContext } from "react";

export default function Home () {
    const context = useContext(GlobalContext)
    const { pokemon, addCard } = context;

    return (
        
        <CardsContainer>
            {pokemon.map((poke) => (
                <PokemonCard
                key={poke.id}
                pokemon={poke}
                types={poke.types}
                addCard={addCard}
                id={poke.id} />
            ))}
            
        </CardsContainer>
        
    )
}