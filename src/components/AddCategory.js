import React, { useState } from 'react';
import PropTypes from 'prop-types'

/* desestructuramos setCategories de las props que recibimos */
const AddCategory = ({  setCategories }) => {
    //definimos el estado del input
    const [inputValue, setInputValue] = useState('');//el valor por defecto del estado, puede ser un string, un objeto, un array, etc

    const handleInputChange = (e) => {
        /* del event que se dispara podemos sacar el valor que está en el input, para lo cual usamos e.target.value\
        con esto podremos escribir dentro de la caja de texto y nuestro estado estará actualizado con lo ultimo que el usuario escribio

        algo muy importante que debemos tener en cuenta es que si nosotros no manejamos el evento onChange, no se nos permitirá cambiar o agregar texto dentro
        del input, esto se debe a que en ningun momento estamos cambiando el estado de este*/
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        //con esto estamos previniendo que se recargue la pagina cuando hacemos el envio del formulario
        e.preventDefault();

        /* validamos que la categoria a añadir no sea undefined */
        if(inputValue.trim().length>2){
            /* implementamos el setCategories que viene desde el componente GifExpertApp, y le pasamos como valor a agregar el valor del input */
            setCategories(cate => [inputValue,...cate]);
            /* Reiniciamos el valor del input y lo dejamos vacio luego de dar enter y mandar la nueva categoria  */
            setInputValue('');
        }
    }

    return (
        /*cuando damos enter y tenemos un formulario el navegador refrescar la pagina completa, para prevenir eso agregamos la propiedad onSubmit*/
        <form onSubmit= {handleSubmit}>
        {/* Aqui recibiremos la categoria */}
            <input
                //ponemos el tipo que recibira nuestro input
                type='text'
                //este será el valor que tendrá el input(valor por defecto) y también es el valor que actualizaremos(valor introducido por el usuario)
                value= {inputValue}
                //para poder actualizar el value debemos manejar el evento onChange, el cual se disparará cada vez que el input cambie
                onChange={handleInputChange}
            />
        </form>
    )
}

/* marcamos como requerido la funcion isCategorie */
AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired,
}

export default AddCategory
