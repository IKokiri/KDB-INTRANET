
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import logo from '../../kdb.png';



export const MenuNav = () =>{

    return(
        <>
            {
               <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
               <Navbar.Brand href="#home">
                 <img
                   src={logo}
                   width="30"
                   height="30"
                   className="d-inline-block align-top"
                   alt="React Bootstrap logo"
                 />
               </Navbar.Brand>
             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
             <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="mr-auto">
                 <Nav.Link href="#features">Home</Nav.Link>
                 <Nav.Link href="#pricing">Notícias</Nav.Link>
                 <NavDropdown title="Corporativo" id="collasible-nav-dropdown">
                   <NavDropdown.Item href="#action/3.1">Catálogos</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.2">Centros de Custos</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.3">Código de Conduta</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.1">Comunicações internas</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.1">Convenção coletiva</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.1">Organograma</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.1">Procedimentos internos</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.1">Representantes</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.1">Segurança, saúde e meio ambiente</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.1">Brigada de Incêndio</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.1">CIPA</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.1">SIPAT</NavDropdown.Item>
                   <NavDropdown.Divider />
                   <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                 </NavDropdown>
                 <Nav.Link href="#pricing">Para Mim</Nav.Link>
                 <Nav.Link href="#pricing">Qualidade</Nav.Link>
                 <Nav.Link href="#pricing">Utilidades</Nav.Link>
               </Nav>
               <Nav>
                 <Nav.Link href="#deets">More deets</Nav.Link>
                 <Nav.Link eventKey={2} href="#memes">
                   Dank memes
                 </Nav.Link>
               </Nav>
             </Navbar.Collapse>
           </Navbar>
            }
            
        </>
        
    )
    
}