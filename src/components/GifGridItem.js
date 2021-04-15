import React from 'react'

/* como en el componente GifGrid mandamos las prop con el spread operator([...img]) aqui podemos colocarlas de manera desestructurada  */
const GifGridItem = ({id,title,url}) => {
    return (
        <div className= "animate__animated animate__bounce animate__delay">
            <img src={ url } alt={ title }></img>
            <p>{ title }</p>
        </div>
    )
}

export default GifGridItem