import React from "react";
import { Container } from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import { goToHome, goToMyPokedex } from "../../routes/coordinator";
import btnPokemon from "../../assets/image1.png";
import { BtnPokedex, BtnPokemon, BtnName } from "./styles";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";



function Header () {
    const navigate = useNavigate()
    const location = useLocation()
    const context = useContext(GlobalContext)
    const { removeCard, id } = context

    const renderHeader = () => {

        switch (location.pathname) {
            case "/":
                return (
                    <>
                        <BtnName><a></a></BtnName>
                        <BtnPokemon onClick={()=>{goToHome(navigate)}} type="image" src={btnPokemon}></BtnPokemon>   
                        <BtnPokedex onClick={()=>{goToMyPokedex(navigate)}}>Pokedex</BtnPokedex>
                    </>
                );
            case "/myPokedex":
                return (
                    <>
                        <BtnPokedex onClick={()=>{goToHome(navigate)}}>Todos Pokemons</BtnPokedex>
                        <BtnPokemon onClick={()=>{goToHome(navigate)}} type="image" src={btnPokemon}></BtnPokemon> 
                        <BtnName><a></a></BtnName>
                    </>
                );
            case "/details":
                return (
                    <>
                        <BtnPokedex onClick={()=>{goToHome(navigate)}}>Todos Pokemons</BtnPokedex>
                        <BtnPokemon onClick={()=>{goToHome(navigate)}} type="image" src={btnPokemon}></BtnPokemon> 
                        <BtnPokedex onClick={()=>{removeCard(id)}}>Excluir da Pokedex</BtnPokedex>
                    </>
                )
            default:
                break;
        }
    }

    return (
        <Container>
            {renderHeader()}
        </Container>
    )
}

export default Header;
