import React from "react";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import { goToHome, goToMyPokedex } from "../../routes/coordinator";
import btnPokemon from "../../assets/image1.png";
import { BtnPokedex, BtnPokemon, BtnName } from "./styles";



function Header () {
    const navigate = useNavigate()

    return (
        <Container>
            <BtnName><a></a></BtnName>
            <BtnPokemon onClick={()=>{goToHome(navigate)}} type="image" src={btnPokemon}></BtnPokemon>   
            <BtnPokedex onClick={()=>{goToMyPokedex(navigate)}}>Pokedex</BtnPokedex>
        </Container>
    )
}

export default Header;