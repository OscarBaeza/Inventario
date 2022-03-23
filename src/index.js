import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, 
  Nav, 
  Container, 
  Button, 
  FormControl,
  Form,
  NavDropdown,
  Offcanvas } from 'react-bootstrap';
  //import Productos from './Tablas/Productos.js';
  import Home from './Home.js';
  

  

ReactDOM.render(
 <Router>
   <div>
          <Navbar bg="primary"expand={false}>
            <Container fluid>
              <Navbar.Brand href="/home">Inventario</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                  <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                  > 
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel" >Menú</Offcanvas.Title>
                  </Offcanvas.Header>
                    <Offcanvas.Body>
                      <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="/home">Home</Nav.Link>
                          <Nav.Link href="#action2">Caracteristicas</Nav.Link>
                          <Nav.Link href="#action2">Planes y precios</Nav.Link>
                          <Nav.Link href="#action2">Soporte</Nav.Link>
                            <NavDropdown title="Almacenes" id="offcanvasNavbarDropdown">
                            <NavDropdown.Item href="/productos">Almacen 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Almacen 2</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Todos</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="información" id="offcanvasNavbarDropdown">
                            <NavDropdown.Item href="#action3">Empresa</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Contacto</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                            Something else here
                            </NavDropdown.Item>
                            </NavDropdown>
                      </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                  <Button variant="outline-success">Search</Button>
              </Form>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
  
          </Navbar>
          <Routes>
          <Route path="/home" element={<Home/>} />
          
          </Routes>
        </div>
 </Router>
  
,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

