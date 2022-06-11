import React from 'react'
import { useDispatch } from 'react-redux'; //para que funcione el store
import { buy_pokemon_action, return_pokemon_action } from '../redux/actions/gameShopAction';

const CompraPokemonHook = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <button className='btn btn-dark btn-sm mb-2' onClick={() => {
                dispatch(buy_pokemon_action(1))
            }
            } > Comprar pokemon </button>
            <button className='btn btn-dark btn-sm ' onClick={() => {
                dispatch(return_pokemon_action(1))
            }
            }> Regresar pokemon </button>
        </div>
    )
}
export default CompraPokemonHook; //connects the component to the store