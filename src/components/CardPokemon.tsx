import { Link } from "react-router-dom";
import Badge from "./Badge";

import * as S from "./CardPokemon.style";

type PokemonTypeProps = {
    type: {
        name: string;  //criado nova props apenas para tipo
    };
};


export type CardPokemonProps = {
    id: number;
    name: string;
    types: Array<PokemonTypeProps>;
};


function CardPokemon(props: CardPokemonProps) {
    return (
        <Link to={`/details${props.id}`}> {/*esse link é igual href mas vai atualizar a pagina sem recarregar*/}
            <S.Card className={`type--${props.types[0].type.name.toLowerCase()}`}>
                <div>
                    <S.Number>#{String(props.id).padStart(3, "0")}</S.Number> {/* Vai ter sempre 3 numeros, porém vai sempre iniciar com um 0 na frente se não existirem 3 num EX: 007 015 151*/}
                    <S.Title>{props.name}</S.Title>
                    {props.types.map((item, index) => {
                        return <Badge key={index} name={item.type.name} /> //vai fazer item e nome aparecerem na tela principal
                    })}
                </div> 
                <S.Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`} alt={props.name} />      
            </S.Card>
        </Link>
    );
}

export default CardPokemon;