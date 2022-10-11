import { Container, Row } from "react-bootstrap";
import CardProducto from "./admiProductos/CardProducto";

const Inicio = () => {
  return (
    <Container className="my-5 mainSection">
      <h1 className="display-3 text-center">Bienvenidos</h1>
      <hr />
      <Row xs={1} md={4} className="g-4">
        {/* aqui van las columnas */}
        <CardProducto></CardProducto>
      </Row>
    </Container>
  );
};

export default Inicio;
