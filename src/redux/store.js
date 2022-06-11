import { applyMiddleware, createStore } from "redux"; //para que funcione el store
import  rootReducers  from "./reducers/rootReducers"; //importar el store
import { composeWithDevTools } from 'redux-devtools-extension' //para que funcione el store
import thunk from "redux-thunk"; //para que funcione el store

export const store = createStore(rootReducers, composeWithDevTools( 
    applyMiddleware(thunk) 
));