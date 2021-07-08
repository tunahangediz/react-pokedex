import { useContext } from "react";
import pokeContext from "../context/pokeContext";

const Pokedox = () => {
    const PokeContext = useContext(pokeContext);
    return (
        <div className="nintendo-box">
            <div className="nintendo">
                <div className="screen-wrapper">
                    <div className="screen">
                        {PokeContext.pokemon.map((poke) => {
                            return (
                                <div>
                                    <h3 className="color-white mx-1">
                                        {poke.name}
                                    </h3>
                                    <div className="flex content-center">
                                        <img
                                            style={{ width: "150px" }}
                                            src={poke.sprites.front_default}
                                            alt=""
                                        />
                                        <img
                                            style={{ width: "150px" }}
                                            src={poke.sprites.back_default}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div
                    style={{
                        width: "400px",
                        margin: "5rem 0px",
                        padding: "0 1rem",
                    }}
                    className="flex content-between"
                >
                    <div className="rotate-btn">
                        <div className="rotate"></div>
                        <div className="rotate"></div>
                        <div className="rotate"></div>
                        <div className="rotate"></div>
                        <div className="rotate"></div>
                        <div className="rotate"></div>
                        <div className="rotate"></div>
                        <div className="rotate"></div>
                        <div className="rotate"></div>
                    </div>
                    <div className="two-btn">
                        <div className="red-btn"></div>
                        <div className="red-btn"></div>
                    </div>
                </div>
            </div>
            <div className="poke-list">
                <div>
                    <div className="inner-list">
                        {PokeContext.pokemons.map((pokemon) => {
                            return (
                                <p
                                    onClick={() =>
                                        PokeContext.getOne(pokemon.url)
                                    }
                                    className="poke-p"
                                    data-url={pokemon.url}
                                    key={pokemon.name}
                                >
                                    {pokemon.name}
                                </p>
                            );
                        })}
                    </div>
                    <div className="my-2  px-1 flex content-between">
                        <button
                            onClick={PokeContext.prevPage}
                            className="nes-btn is-primary"
                        >
                            prev
                        </button>
                        <button
                            onClick={PokeContext.nextPage}
                            className="nes-btn is-primary"
                        >
                            next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pokedox;
