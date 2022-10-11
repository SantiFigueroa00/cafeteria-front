import { Badge, Card, Col, Row } from 'react-bootstrap';

const DetalleProducto = () => {
    
    return (
        <Card className='container my-5 mainSection'>
            <Row className='w-75'>
                <Col md={6}>
                    <img src='https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='brownie' className="w-100" />
                </Col>
                <Col md={6} className="py-3">
                <h3>Brownie</h3>
                <hr/>
                <Badge bg="success">Dulce</Badge>
                <p className='mt-3'><b>Precio: $300</b></p>
                </Col>
            </Row>
        </Card>
    );
};

export default DetalleProducto;