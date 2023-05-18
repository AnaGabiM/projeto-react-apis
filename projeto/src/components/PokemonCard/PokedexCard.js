import React from "react";
import { Container, PokemonName, PokemonNumber, TypesContainer, PokemonType, Pokeball, CatchButton, Pokemon } from "./styles";
import pokeball from "../../assets/pngwing2.png"
import { getTypes } from "../../utils/ReturnPokeType";
import { goToDetails } from "../../routes/coordinator";
import { getColors } from "../../utils/ReturnCardColor";

export default function PokedexCard ({pokemon, types, id, removeCard}) {

    const pokemonFilterColor = types.map((types) => {
        return (
            types.type
        )
    })

    return (
        <Container color= {getColors(pokemonFilterColor[0].name)}>
            <div>
                <PokemonNumber>{`#0${pokemon.id}`}</PokemonNumber>
                <PokemonName>{pokemon.name}</PokemonName>
                <TypesContainer>
                    {types.map((types) => {
                        return <PokemonType key={types} src={getTypes(types.type.name)} alt="" />
                    })}
                </TypesContainer>
                <button onClick={()=>{goToDetails()}}>Detalhes</button>
            </div>
            <div>
                <Pokemon 
                    src={pokemon.sprites.other["official-artwork"].front_default
                    }
                    alt="" />
                <CatchButton onClick={()=>{removeCard(id)}}>Excluir</CatchButton>
            </div>
            <Pokeball 
                src={pokeball}
                alt="pokeball" />
        </Container>
    )
}