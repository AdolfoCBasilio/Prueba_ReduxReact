import { combineReducers } from "redux";
import { game_shop } from './gameShopReducer'
import buscador from './buscadorReducer'
const rootReducers = combineReducers({
    game_shop,
    buscador,
});

export default rootReducers;