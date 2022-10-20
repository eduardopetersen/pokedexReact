import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import api from "../services/api";

import { Container, Image, Card, Number, Title } from "./Details.style";
import Badge from "../components/Badge";
import { CardPokemonProps } from "../components/CardPokemon";

function Details() {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [pokemonData, setPokemonData] = useState<CardPokemonProps>( {} as CardPokemonProps);


    async function getPokemonData() {
        const { data } = await api.get("pokemon/" +id);
        setPokemonData ({
            id: data.id,
            name: data.name,
            types: data.types,
        });
        setIsLoading(false);
    }

    useEffect(() => {
        getPokemonData(); 
    }, []);

    
    if (isLoading) {
    return <p>Carregando</p>;
}
    


    return (
        <>
            <NavBar hasGoBack />

            <Container>
            
            <Image         
             src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt={pokemonData.name}      
            />

            <Card className={`type--${pokemonData.types[0].type.name.toLowerCase()}`}>
                <Number>#{String(id).padStart(3, "0")}</Number> {/* Vai ter sempre 3 numeros, porém vai sempre iniciar com um 0 na frente se não existirem 3 num EX: 007 015 151*/}
                <Title>{pokemonData.name}</Title>
                {pokemonData.types.map((item, index) => {
                    return <Badge key={index} name={item.type.name} /> //vai fazer item e nome aparecerem na tela principal
                })}
            </Card>

            </Container>

            
            {/* <button onClick={handleSomar}>O valor é: {contador}</button> */}
        </>
    );    
}

export default Details;