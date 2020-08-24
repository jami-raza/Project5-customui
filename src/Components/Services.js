import React from 'react'
import { Link } from "react-router-dom";
import {Container,Row,Col,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import image from '../images/service.gif';
import Moreservices from './Servicesmore';
const Styles = styled.div`
justify-content:center;
align-items:center;
.container{
    margin-top:30px;
    display:column;
    flex-direction: column;
}
`

function Services(){
    return(
        <Styles>
            <Container>
            <Row>
            <Col xs={12} md={6} >
            <Card style={{width:"500px"}}>
            <Card.Body>
                <Card.Title className>
                Explore The Services<br/>
                    We Offer For You
                </Card.Title>
      <Card.Text>
      Nunc sodales lobortis arcu, sit amet venenatis erat placerat a. Donec lacinia magna nulla, cursus impediet augue egestas id. Suspendisse dolor lectus, pellentesque quis tincidunt ac, dictum id neque.
      </Card.Text>
      <button className="button"><Link className="button_link" to="/Fullservices" >Explore all Services</Link></button>
    </Card.Body>
    
        
    </Card>
                  </Col>
                 <Col xs={12} md={6}><Card.Img  src={image} /> </Col>
            </Row>
            <Col xs ={12} >
                      <Moreservices/>
                  </Col>
            </Container>
            
        </Styles>
        
    )
}

export default Services;