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
export const crearProductoAPI = async (producto) => { 
    try {
        // peticion Get para obtener listado
        const respuesta = await fetch(URL,{
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(producto)
        });
        return respuesta;
    } catch (error) {
        return false;
    }
};
export const borrarProductoAPI = async (id) => { 
    try {
        // peticion Get para obtener listado
        const respuesta = await fetch(URL+`/${id}`,{
            method: 'DELETE',
        });
        return respuesta;
    } catch (error) {
        return false;
    }
};

export const obtenerProductoAPI = async (id) => { 
    try {
        // peticion Get para obtener listado
        const respuesta = await fetch(URL+`/${id}`);
        const producto={
            dato: await respuesta.json(),
            status: respuesta.status
        }
        return producto;
    } catch (error) {
        return false;
    }
};

export const editarProductoAPI = async (id,producto) => { 
    try {
        // peticion Get para obtener listado
        const respuesta = await fetch(URL+`/${id}`,{
            method: 'PUT',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(producto)
        });
        return respuesta;
    } catch (error) {
        return false;
    }
};