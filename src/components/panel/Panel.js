
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';



export const Panel = () =>{

    return(
        <>
            {
               <Jumbotron>
               <Container>
                 <h1>Página Inicial</h1>
                 <p>
                   This is a modified jumbotron that occupies the entire horizontal space of
                   its parent.
                 </p>
               </Container>
             </Jumbotron>
            }
            
        </>
        
    )
    
}