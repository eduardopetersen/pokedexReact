import { Link } from "react-router-dom";
import "./CardPokemon.css";



type CardPokemonProps = {
    id: number;
    name: string;
};


function CardPokemon(props: CardPokemonProps) {
    return (
        <Link to={`/details${props.id}`}> {/*esse link é igual href mas vai atualizar a pagina sem recarregar*/}
            <div className="card">
                <div className="info">
                    <span className="info__number">#{String(props.id).padStart(3, "0")}</span> {/* Vai ter sempre 3 numeros, porém vai sempre iniciar com um 0 na frente se não existirem 3 num EX: 007 015 151*/}
                    <p className="info__name">{props.name}</p>
                </div> 
                <img className="card__img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`} alt="Bubasauro" />      
            </div>
        </Link>
    );
}

export default CardPokemon;