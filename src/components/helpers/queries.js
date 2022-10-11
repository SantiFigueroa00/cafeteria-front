const URL = process.env.REACT_APP_API_CAFE;

export const consultarAPI = async () => { 
    try {
        // peticion Get para obtener listado
        const respuesta = await fetch(URL);
        const listaProductos = await respuesta.json();
        return listaProductos;
    } catch (error) {
        return false;
    }
};