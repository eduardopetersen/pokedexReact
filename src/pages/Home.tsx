import NavBar from "../components/NavBar";
import "../pages/Home.css";


function Home() {
    return (
        <>
            <NavBar />
            <h1 className="title">Encontre todos os pokémons em um só lugar</h1>
        
        <div className="list">
            <div className="card">
                <div className="info">
                    <span className="info__number"></span>
                    <p className="card__name">Bubasauro</p>
                    <img className="card__img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bubasauro" />
                </div>   
            </div>
            <div className="card">
                <div className="info">
                    <span className="info__number"></span>
                    <p className="card__name">Bubasauro</p>
                    <img className="card__img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bubasauro" />
                </div>   
            </div>
            <div className="card">
                <div className="info">
                    <span className="info__number"></span>
                    <p className="card__name">Bubasauro</p>
                    <img className="card__img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bubasauro" />
                </div>   
            </div>
            <div className="card">
                <div className="info">
                    <span className="info__number"></span>
                    <p className="card__name">Bubasauro</p>
                    <img className="card__img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bubasauro" />
                </div>   
            </div>
            <div className="card">
                <div className="info">
                    <span className="info__number"></span>
                    <p className="card__name">Bubasauro</p>
                    <img className="card__img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bubasauro" />
                </div>   
            </div>
            <div className="card">
                <div className="info">
                    <span className="info__number"></span>
                    <p className="card__name">Bubasauro</p>
                    <img className="card__img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bubasauro" />
                </div>   
            </div>
        </div>
        </>
    );
}

export default Home;