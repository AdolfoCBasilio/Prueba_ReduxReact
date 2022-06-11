import React from 'react'
import { useSelector } from 'react-redux'; // para usar el store

const CantidadPokemonHook = () => {

    const game_shop = useSelector((state) => state.game_shop); //! return {state.game_shop.pokemon}

    return (
        <React.Fragment>
            Unidades: {game_shop.pokemon}
        </React.Fragment>
    )
}
export default CantidadPokemonHook; //connects the component to the store