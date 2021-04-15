import React from 'react'
import useFetchGIfs from '../hooks/useFetchGIfs'
// import React, { useEffect, useState } from 'react'
// import getGifs from '../helpers/getGift';
import GifGridItem from './GifGridItem';

//recibimos la categoria que viene desde el componente padre, el cual está en el componente GifExpertApp
const GifGrid = ({category}) => {
    //usamos el custom hook useFetchGif
    const { data:images, loading} = useFetchGIfs(category);


    //estado de las imagenes que vamos a recibir del API
    // const [images, setImages] = useState([])

    /* definimos el estado de un contador para comprension de useEffect */
    //const [count, setCount] = useState(0);

    /* Si nosotros implementamos el estado del boton del contador y ademas tenemos la llamada de la funcion getGifs a la misma altura que el estado, al detectar cambios provocaría que todo se vuelva a renderizar
    incluyendo la ejecución de la funcion, para evitar esto, haremos uso de useEffect, el cual nos permite ejecutar codifo específico de manera condicional */

    /* useEffect(() => {
        //getGifs es la funcion que ejecutaremos de manera condicional
       getGifs(category)
       .then(setImages);
    }, [category]) */

    /* al pasarle al useEffect como segundo parámetro un array vacío estamos indicandole a react que nuestro efecto no depende de ningun valor y por lo tanto las funciones 
    que estén declaradas dentro de useEffect solo deberán ejecutarse al montar y desmontar el componente GifGrid*/

    // getGifs(); llamada a la funcion antes de implementar useEffect

    return (
        <>
            {/* los animate son animaciones que hemos implementado de una libreria */}
            <h3 className={"animate__animated animate__fadeIn"}>{ category }</h3>
            {/* usamos el loading del hook loading*/}
            {loading && <p className= {"animate__animated animate__flash"}>Loading...</p>}

            <div className="card-grid">
                {/* imprimimos el valor del contador */}
                {/* <h2>{ count }</h2> */}
                {/* Habilitamos el evento onClick */}
                {/* <button onClick={()=>{ setCount( count + 1 ) }}></button> */}

                {/* mostraremos en una lista ordenada el titulo de las imagenes de la API
                como key vamos a agregar el valor del id que tiene cada imagen */}
                    {
                        images.map((img) => (
                            <GifGridItem
                                key={img.id}
                                // enviando argumentos de esta manera nos da una manera mas flexible de manejar las props
                                // ya que lo que hacemos es mandar cada propiedad, en este caso (id, title, url), como propiedades independientes
                                {...img}
                            />
                        ))
                    }
            </div>
        </>
    )
}

export default GifGrid


/* el estado de contador y el boton eran ejemplo para comprender el uso del useEffect */