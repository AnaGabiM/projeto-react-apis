import React, { useEffect } from "react";


export const Pokemon = () => {
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
    
}