import React , { useState } from 'react'
import './Card.css';
import ShowImage from './ShowImage';

const Card = ({ videogame }) => {

    const [count, setCount] = useState( videogame.cantidad )

    return (
        <div className='card m-10 card-cont'>
            <div>
                <ShowImage className="img" item={ videogame } url="videojuegos" />
                <h2>{ videogame.nombre }</h2>
                <p>$ { videogame.precio }</p>
                <p>{ videogame.descripcion }</p>
                <button className='btn btn-success' >Ver Mas</button>
            </div>
        </div>
    )
}

export default Card
