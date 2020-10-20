
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
                 </NavDropdown>
                 <NavDropdown title="Para Mim" id="collasible-nav-dropdown">
                   <NavDropdown.Item href="#action/3.1">Banco Itaú</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.1">BrasilPrev</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.1">Planos de Saúde e Convênios</NavDropdown.Item>
                 </NavDropdown>
                 <NavDropdown title="Qualidade" id="collasible-nav-dropdown">
                   <NavDropdown.Item href="#action/3.1">Certificado ISO 9001:2015</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.1">Norma ISO 9001:2015</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.1">Normas Técnicas</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.1">Objetivos da Qualidade</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.1">Política da qualidade</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.1">Procedimentos conforme Sistema da Qualidade</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.1">Plano de Comunicação Kuttner</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.1">PLANO RESUMIDO DE AÇÕES E METAS - KUTTNER - 2019-2020</NavDropdown.Item>
                 </NavDropdown>
                 <Nav.Link href="#pricing">Utilidades</Nav.Link>
               </Nav>
             </Navbar.Collapse>
           </Navbar>
            }
            
        </>
        
    )
    
}