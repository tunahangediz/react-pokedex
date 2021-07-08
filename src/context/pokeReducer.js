import {
    GET_ONE,
    GET_POKES,
    NEXT,
    NEXT_PAGE,
    PREV,
    PREV_PAGE,
} from "../context/types";

const pokeReducer = (state, action) => {
    switch (action.type) {
        case GET_POKES:
            return { ...state, pokemons: action.payload };

        case NEXT:
            return { ...state, next: action.payload };
        case PREV:
            return { ...state, prev: action.payload };
        case NEXT_PAGE:
            return { ...state, api: state.next };
        case PREV_PAGE:
            return {
                ...state,
                api: state.prev,
            };
        case GET_ONE:
            return {
                ...state,
                pokemon: [action.payload],
            };

        default:
            return state;
    }
};

export default pokeReducer;
