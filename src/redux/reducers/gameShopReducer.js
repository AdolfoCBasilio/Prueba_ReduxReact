import { BUY_POKEMON,RETURN_POKEMON } from "../actions/gameShopAction";

const default_game_shop = {
    pokemon: 30
};

export const game_shop = (state = default_game_shop, action) => {
    switch (action.type) {
        case BUY_POKEMON: return { ...state, pokemon: state.pokemon - action.payload };
        case RETURN_POKEMON: return { ...state, pokemon: state.pokemon + action.payload };
        default: return state;
    }
}