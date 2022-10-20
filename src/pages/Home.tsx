import { useEffect, useState } from "react";
import CardPokemon from "../components/CardPokemon";
import NavBar from "../components/NavBar";
import { Title, List, Input } from "./Home.style";
import api from "../services/api";
import { CardPokemonProps } from "../components/CardPokemon";



function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemonList, setPokemonList] = useState<CardPokemonProps[]>([]);
    const [textoBusca, setTextoBusca] = useState('');

async function getPokemonData() {
    const { data } = await api.get("pokemon?limit=151");

    const dadosCompletos = await Promise.all(
        data.results.map(async (result: { url: string }) => {
            const { data } = await api.get(result.url);
            
            
            return {
                id: data.id,
                name: data.name,
                types: data.types,
                };
            })
        );

    console.log("dadosCompletos:", dadosCompletos);    
     
    
    setPokemonList(dadosCompletos);   
    setIsLoading(false);
}

useEffect(() => {
    getPokemonData(); 
}, []);

if(isLoading){
    return <p>Carregando</p>;
}
  

    return (
        <>
            <NavBar />
            <Title>Encontre todos os pokémons em um só lugar</Title>

            <Input type="text" placeholder="Buscar por NOME" value={textoBusca} onChange={(event) => setTextoBusca(event.target.value)} />
        
            <List className="list">
                {pokemonList
                .filter((pokemon) => pokemon.name.includes(textoBusca) || String(pokemon.id) == textoBusca) //vai filtrar todos os nomes no campo de busca que tenham o que foi digitado no "textoBusca" OU pela ID
                .map((pokemon,index) => {
                    return (
                        <CardPokemon key={index} id={pokemon.id} name={pokemon.name} types={pokemon.types}
                        />
                    );
                })}
            </List>
        </>
    );
}

export default Home;