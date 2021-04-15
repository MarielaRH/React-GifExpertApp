/* Componente encargado del fetch al api 

por ser un componen async lo que este retorna es una promesa*/

const getGifs = async(category) => {
    /* al pasar la categoria en la url estamos haciendo que coja el valor de la categoria escrita por el usuario y que en base a eso realice la peticion */
    const url= `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=EZwZDiZj0wPXIknuJkaBuMyqi3sG511y`
    /* Hacemos una peticion a la url que hemos definido, esta nos devolverá un objeto json con toda la informacion */
    const resp = await fetch(url);
    /* Con el metodo .json transformamos el objeto json a un objeto js para poder utilizar la informacion de este, y desestructuramos la informacion que nos interesa
    que en este caso lo que utilizaremos es lo que está dentro de data*/
    const {data} = await resp.json();

    /* recorremos la data para extraer solo los datos que nos interesan de la imagen */
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            /* hacemos uso del operador ternario para preguntar que si la url viene en las imagenes que la utilice*/
            url:img.images?.downsized_medium.url
        }
    })
    return gifs; 
}

export default getGifs;