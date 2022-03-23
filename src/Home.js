
import React from 'react';
import slide1 from './img/slide1.jpg'
import { Carousel, Container, Row, Col, Table } from 'react-bootstrap';
import './CSS/Styles.css'
export default class Inicio extends React.Component{
    render(){
        return(
            
            <Container>
                <Row className='justify-content-center'>
                    <Col md="auto" className='d-none d-sm-block'>

                    <Carousel>
                <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className='d-sm-none d-md-block text-slide'>First slide label</h3>
      <p className='d-sm-none d-md-block text-slide'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide1}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className='d-sm-none d-md-block text-slide'>Second slide label</h3>
      <p className='d-sm-none d-md-block text-slide'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide1}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className='d-sm-none d-md-block text-slide'>Third slide label</h3>
      <p className='d-sm-none d-md-block text-slide'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
                    
                    </Col>
                    <Col>
                    <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Clave</th>
                    <th>Producto</th>
                    <th>Categoria</th>
                    <th>Existencia</th>
                    <th>Nivel Reorden</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>Chai</td>
                    <td>Beverages</td>
                    <td bgcolor="red">39</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>17</td>
                    <td>Alice Mutton</td>
                    <td>Meat/Poultry</td>
                    <td className='td-productos'>0</td>
                    </tr>
                    
                </tbody>
            </Table>
                    </Col>
                </Row>
            </Container>

            
            

        );
    }
}
//Inicio
