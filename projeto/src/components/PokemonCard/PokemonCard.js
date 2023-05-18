import React from "react";
import { Container, PokemonNumber, PokemonName, PokemonType, TypesContainer, Pokeball, CatchButton, Pokemon, BtnDetains } from "./styles";
import pokeball from "../../assets/pngwing2.png"
import {getTypes} from "../../utils/ReturnPokeType"
import { useNavigate } from "react-router-dom";
import { goToDetails } from "../../routes/coordinator";
import { getColors } from "../../utils/ReturnCardColor";


const PokemonCard = ({pokemon, types, addCard, id}) => {
    const navigate = useNavigate()

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
                <BtnDetains><div onClick={()=>{goToDetails(navigate)}}>Detalhes</div></BtnDetains>
            </div>
            <div>
                <Pokemon 
                    src={pokemon.sprites.other["official-artwork"].front_default
                    }
                    alt="" />
                <CatchButton onClick={()=>addCard(id)}> Capturar!</CatchButton>
            </div>
            <Pokeball 
                src={pokeball}
                alt="pokeball" />
        </Container>
        
    );
};

export default PokemonCard;