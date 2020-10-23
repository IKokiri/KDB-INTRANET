
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export const Noticias = () =>{

    return(
        <>
            {
               <Jumbotron>
               <h1>Notícias</h1>

                
                <Row>
                    <Col>
                <Card>                
                    <Card.Body>
                    <Card.Title>
                        <Card.Img variant="top" style={{ width: '10rem',padding:'5px' }} src="imgs/pdf128.png" /></Card.Title>
                        <Card.Text>      
                            <h4>Kuttner News Nº 1</h4>
                        </Card.Text>
                    </Card.Body>
                </Card>

                    </Col>
                    <Col>
                        <Card>                
                            <Card.Body>
                            <Card.Title>
                                <Card.Img variant="top" style={{ width: '10rem',padding:'5px' }} src="imgs/pdf128.png" /></Card.Title>
                                <Card.Text>      
                                    <h4>Kuttner News Nº 1</h4>
                                </Card.Text>
                            </Card.Body>
                        </Card>                        
                    </Col>
                    <Col>
                        <Card>                
                            <Card.Body>
                            <Card.Title>
                                <Card.Img variant="top" style={{ width: '10rem',padding:'5px' }} src="imgs/pdf128.png" /></Card.Title>
                                <Card.Text>      
                                    <h4>Kuttner News Nº 1</h4>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        
                    </Col>
                    <Col>
                        <Card>                
                            <Card.Body>
                            <Card.Title>
                                <Card.Img variant="top" style={{ width: '10rem',padding:'5px' }} src="imgs/pdf128.png" /></Card.Title>
                                <Card.Text>      
                                    <h4>Kuttner News Nº 1</h4>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        
                    </Col>
                </Row>
                
             </Jumbotron>
            }
            
        </>
        
    )
    
}