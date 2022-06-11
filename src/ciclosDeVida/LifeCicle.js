import React, { Component } from 'react'

export default class LifeCicle extends Component {
    constructor(props) {
        super(props)

        this.state = { //se puede usar para actualizar el estado del componente
            first: 0,
        }
    }

    componentDidMount() { //cuando el componente se monta
        console.log('componentDidMount')    //se ejecuta una sola vez
    }

    componentDidUpdate() { //cuando el componente se actualiza
        console.log('componentDidUpdate')    //se ejecuta una sola vez
    }


    componentWillUnmount() { //cuando el componente se desmonta
        console.log('componentWillUnmount')    //se ejecuta una sola vez
    }

    handleClick = () => {   //cuando se hace click en el boton
        this.setState({ //se actualiza el estado
            first: this.state.first + 1 //se suma 1 al estado
        })
    }

    render() { //cuando se renderiza el componente
        return (
            <div>
                <h1>{this.state.first}</h1>
                <button onClick={this.handleClick}>Sumar</button>
            </div>
        )
    }
}
