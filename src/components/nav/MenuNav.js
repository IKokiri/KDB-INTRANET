
import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import logo from '../../kdb.png';

import {Panel} from '../panel/Panel'
import {Home} from '../home/Home'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export const MenuNav = () =>{

    return(
        <>
      
            {
              
               <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
               <Navbar.Brand>
               <Link to="/">
                 <img
                   src={logo}
                   width="30"
                   height="30"
                   className="d-inline-block align-top"
                   alt="React Bootstrap logo"
                 />
                 </Link>
               </Navbar.Brand>
             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
             <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="mr-auto">
                 <Nav.Link>
                   <Link to="/topics">Notícias</Link>
                   </Nav.Link>
                 
                 <NavDropdown title="Corporativo" id="collasible-nav-dropdown">
                   <NavDropdown.Item href="/topics">Catálogos</NavDropdown.Item>
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
                   <NavDropdown.Item href="#action/3.1">PLANO RESUMIDO DE AÇÕES E METAS</NavDropdown.Item>
                 </NavDropdown>
                 <NavDropdown title="Utilidades" id="collasible-nav-dropdown">
                   <NavDropdown.Item href="#action/3.1">Aniversariantes do Mês</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.1">Links úteis</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.1">Formulários</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.1">Lista de ramais</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.1">Lista Skype</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.1">Lista de Celulares</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.1">Troca Assinatura</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.1">Lista de ramais - KNBS</NavDropdown.Item>
                 </NavDropdown>
               </Nav>
             </Navbar.Collapse>
           </Navbar>
           
            }
          
        </>
        
    )
    
}
