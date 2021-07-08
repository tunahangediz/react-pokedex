import axios from "axios";
import React, { useEffect, useReducer } from "react";
import PokeContext from "./pokeContext";
import pokeReducer from "./pokeReducer";
import { GET_ONE, GET_POKES, NEXT, NEXT_PAGE, PREV, PREV_PAGE } from "./types";

const PokeState = (props) => {
    const initialState = {
        pokemons: [],
        loading: false,
        api: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=18",
        next: "",
        prev: "",
        pokemon: [],
    };

    const [state, dispatch] = useReducer(pokeReducer, initialState);

    useEffect(() => {
        getPokes();
        return () => {
            console.log("cleanup");
        };
    }, [state.api]);

    const getPokes = async () => {
        const data = await axios.get(state.api);
        dispatch({ type: GET_POKES, payload: data.data.results });
        dispatch({ type: NEXT, payload: data.data.next });
        dispatch({ type: PREV, payload: data.data.previous });
    };

    ///click the next button change the api

    const nextPage = () => {
        dispatch({ type: NEXT_PAGE });
    };
    const prevPage = () => {
        state.prev !== null
            ? dispatch({ type: PREV_PAGE })
            : console.log("empty");
    };
    ///Get one pokemon

    useEffect(() => {
        getOne("https://pokeapi.co/api/v2/pokemon/1/");
        return () => {};
    }, []);

    const getOne = async (url) => {
        const pokemon = await axios.get(url);
        dispatch({ type: GET_ONE, payload: pokemon.data });
    };

    return (
        <PokeContext.Provider
            value={{
                pokemons: state.pokemons,
                loading: state.loading,
                nextPage,
                prevPage,
                getOne,
                pokemon: state.pokemon,
            }}
        >
            {props.children}
        </PokeContext.Provider>
    );
};

export default PokeState;
