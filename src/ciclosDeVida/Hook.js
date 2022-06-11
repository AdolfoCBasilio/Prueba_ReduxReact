import React, { useEffect, useState } from 'react'

export const Hook = () => {

    const [first, setfirst] = useState(0) //inicializar el estado, componente montado

    const handleClick = () => {
        setfirst(first + 1)
    }

    useEffect(() => {
        //   inicio, cambios
        console.log('componente montado')
        return () => {
            // destruccion
            console.log('componente desmontado')
        }
    }, [ first /*arreglo vacio*/])

    return (
        <div>
            <h1>{first}</h1>
            <button onClick={handleClick}>Sumar</button>
        </div>
    )
}
