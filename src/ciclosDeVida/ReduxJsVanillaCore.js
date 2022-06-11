const createStore = require('redux').createStore;
const combineReducers = require('redux').combineReducers;

// ##### Actions
const BUY_POKEMON = 'BUY_POKEMON';
const RETURN_POKEMON = 'RETURN_POKEMON';
const buy_pokemon_action = (cant) => {
    return {
        type: BUY_POKEMON,
        payload: cant
    }
}
const return_pokemon_action = (cant) => {
    return {
        type: RETURN_POKEMON,
        payload: cant
    }
}

const BUY_SWITCH = 'BUY_SWITCH';
const buy_switch_action = (cant) => {
    return {
        type: BUY_SWITCH,
        payload: cant
    }
}
// ###### Reducers (combineReducers)
const default_games_state = {
    pokemon: 10,
    yoshi: 10,
}

const games_reducer = (state = default_games_state, action) => {
    switch (action.type) {
        case BUY_POKEMON: {
            return {
                ...state,
                pokemon: state.pokemon - action.payload
            }
        }
        case RETURN_POKEMON: {
            return {
                ...state,
                pokemon: state.pokemon + action.payload
            }
        }
        default: return state;
    }
}

const default_consoles_state = {
    ps5: 30,
    switch: 30,
}
const console_reducer = (state = default_consoles_state, action) => {
    switch (action.type) {
        case BUY_SWITCH: {
            return {
                ...state,
                switch: state.switch - action.payload
            }
        }
        default: return state;
    }
}

const rootReducers = combineReducers({
    games_reducer,
    console_reducer,
})

// #### Store (Store es una funcion que recibe un reducer y devuelve un objeto con una funcion dispatch)
const store = createStore(rootReducers);

// console.log('Estado inicial:', store.getState());

store.subscribe(() => { //! para que se ejecute cada vez que se haga un dispatch
    console.log('Cambio de estado:', store.getState()); 
});

store.dispatch(buy_pokemon_action(5)); //! se ejecuta el dispatch
// store.dispatch(return_pokemon_action(5));
// store.dispatch(buy_switch_action(10));











//!npm i boostrap
//* npm i bootstrap
//* npm i redux react-redux

//* npm i jquery
//? npm install --save redux-devtools-extension

//* npm i redux-thunk
//* npm i axios