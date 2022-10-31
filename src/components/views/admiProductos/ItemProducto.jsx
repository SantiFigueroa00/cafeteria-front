
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { borrarProductoAPI, consultarAPI } from "../../helpers/queries";

const ItemProducto = ({_id, nombreProducto, categoria,imagen,precio,setProductos}) => {
// const ItemProducto = ({producto}) => {
// const { _id, nombreProducto, categoria,imagen,precio}={...producto}
const borrarProducto=()=>{

  borrarProductoAPI(_id).then((respuesta)=>{
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
      <td>{_id}</td>
      {/* <td>{props.producto.nombreProducto}</td> */}
      <td>{nombreProducto}</td>
      <td>${precio}</td>
      <td>{imagen}</td>
      <td>{categoria}</td>
      <td>
        <Link className="btn btn-warning" to={`/administrar/editar/${_id}`}>
          Editar
        </Link>
        <Button variant="danger" onClick={borrarProducto}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
