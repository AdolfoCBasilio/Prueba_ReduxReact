import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import fetchPokemon from '../../redux/actions/buscadorAction';

const BuscadorPokemon = () => {
  const dispatch = useDispatch(); //para que funcione el store
  const [pokemon_name, set_pokemon_name] = useState('mewtwo'); //pokemon_name es el nombre del pokemon que se busca
  return (
    <div className="form-group">
      <label htmlFor="buscar_pokemon" className='text-white'>Buscar Pokemon</label>
      <input type="text" className='form-control' id='buscar_pokemon'
        value={pokemon_name}
        onChange={
          (event) => {
            set_pokemon_name(event.target.value); //cambiar el valor del pokemon_name
          }}
      />
      <button className='btn btn-primary mt-3'
        onClick={() => {
          dispatch(fetchPokemon(pokemon_name))  //dispatch para que se ejecute el action
        }}
      >Enviar</button>
    </div>
  )
}

export default BuscadorPokemon