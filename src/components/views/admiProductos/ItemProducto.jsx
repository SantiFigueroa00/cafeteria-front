
import { Button } from "react-bootstrap";

const ItemProducto = () => {

  return (
    <tr>
      <td>1</td>
      {/* <td>{props.producto.nombreProducto}</td> */}
      <td>Brownie</td>
      <td>$450</td>
      <td>https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1</td>
      <td>Dulce</td>
      <td>
        <Button variant="warning">
          Editar
        </Button>
        <Button variant="danger">
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
