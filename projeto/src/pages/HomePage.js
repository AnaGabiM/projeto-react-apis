import PokemonCard from "../components/PokemonCard/PokemonCard";
import { CardsContainer } from "../styles";
import { useEffect } from "react";
import { useState } from "react";

export default function Home ({listCards, setListCards}) {
    const [pokemon, setPokemons] = useState([]);

    const getPokemons = async () => {
        const pokemonsArr = []
        try {
            for (let i=1; i <= 21; i++) {
                pokemonsArr.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
            };
            await Promise.all(pokemonsArr.map((e) => fetch(e)))
            .then ((res) => Promise.all(res.map(async r => r.json())))
            .then((res) => {
                console.log(res)
                setPokemons(res)})
        }
        catch (er) {console.log(er)}
    }

    useEffect(() => {getPokemons()}, [])

    function addCard (id) {
        const i = listCards.findIndex((item) => item.id ===id);
        if (i !== -1 ) {
            console.log("nao permitido")
        } else {
        const cardFind = pokemon.find((poke) => poke.id === id)
        const newCard = {...cardFind, amount: 1}
        const newList = [...listCards, (listCards[1] = newCard)];
        setListCards(newList)
        }
    }

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