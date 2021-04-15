import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

 const GifExpertApp = () => {
    /* para crear la lista ordenada de categorias podemos usar el estado con un valor inicial y con setCategories podemos agregar mas categorías */
     const [categories, setCategories] = useState(['']);

     /* const handlerAdd = () => {
        //Maneras de agregar un elemento a un arreglo por medio del estado

        // setCategories(categories.concat('Naruto'));
        // setCategories([...categories,'Naruto']);
        setCategories(cate => [...cate,'Naruto']);// pasamos a setCategorias una funcion que recibe como parametro el estado inicial y devuelve el estado modificado
     } */

     return (
         <>
             <h2>GifExpertApp</h2>
             {/* aqui le pasamos la referencia de nuestra funcion setCategories para poder agregar nuevas categorias desde el componente AddCategories */}
             <AddCategory setCategories= { setCategories }/>
             <hr/>
            {/*  <button onClick= {handlerAdd}>Agregar</button> */}
             <ol>
                 {
                     categories.map( category => (
                         <GifGrid key={category} category={category}/>
                        /* al elemento li debemos colocarle el key unico de cada elemento y para hacerlo podemos colocar la misma categoria que recibimos
                         esto se hace para no tener un error en la consola del navegador

                         return <li key={categories}>{categories}</li>


                         nos traemos el componente encargado de renderizar los gif de la careforia y le pasamos por pros la categoria que estamos evaluando */
                     ))
                 }
             </ol>
         </>
     );
 };

 export default GifExpertApp;