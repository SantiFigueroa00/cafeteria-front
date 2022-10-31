
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarProductoAPI, consultarAPI } from "../../helpers/queries";

const ItemProducto = ({id, nombreProducto, categoria,imagen,precio,setProductos}) => {
// const ItemProducto = ({producto}) => {
// const { id, nombreProducto, categoria,imagen,precio}={...producto}
const borrarProducto=()=>{

  borrarProductoAPI(id).then((respuesta)=>{
    // TAREA AGREGAR PREGUNTA SI QUIERE BORRAR O NO
    if(respuesta.status ===200){
      Swal.fire('Producto eliminado','El producto fue eliminado correctamente','success');
      consultarAPI().then((respuesta)=>{setProductos(respuesta)},
      (reason)=>{
        console.log(reason)
        Swal.fire(
          'Ocurrio un error',
          'Intente nuevamente en unos minutos',
          'error'
        )
      });
    }else{
      Swal.fire('Ocurrio un error','El producto no fue eliminado','error')
    }
  })
}

  return (
    <tr>
      <td>{id}</td>
      {/* <td>{props.producto.nombreProducto}</td> */}
      <td>{nombreProducto}</td>
      <td>${precio}</td>
      <td>{imagen}</td>
      <td>{categoria}</td>
      <td>
        <Button variant="warning">
          Editar
        </Button>
        <Button variant="danger" onClick={borrarProducto}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
