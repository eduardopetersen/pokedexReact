import { useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import pokemonList from "../assets/pokemon.json";

function Details() {
    const { id } = useParams();

    const [contador, setContador] = useState(0);

    const { pokemons } = pokemonList;

    function handleSomar() {
        setContador(contador + 1);
    }

    return (
        <>
            <NavBar hasGoBack />

            <h1>{pokemons.find((pokemon) => String(pokemon.id) == id)?.name}</h1>
            
            <button onClick={handleSomar}>O valor é: {contador}</button>
        </>
    );    
}

export default Details;