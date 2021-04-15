/* CUSTOM HOOK */
import {useEffect, useState} from 'react'
import getGifs from '../helpers/getGift'


const useFetchGIfs = (category) => {
    //definimos el estado del hook
    const [state, setState] = useState({
        data: [],
        loading: true,
    })

    //establecemos el efecto , cada vez que se monte nuestro componente GifExpretApp se ejecutará el codifo que este dentro
    useEffect(() => {
        //llamamos a getGifs que es el encargado de realizar el fetch al API, pero este componente es async por lo tanto nos devolverá una promesa
       getGifs(category)
       .then(imgs => {
           //cargamos en el estado la informacion de todos los gif relacionados a la categoria, que nos devolvio getGif
           setState({
               data: imgs,
               loading: false
           })
    })

    }, [category])


    return state;
}

export default useFetchGIfs
