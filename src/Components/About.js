import React from 'react'
import {Link} from 'react-router-dom';
import {Container,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner2 from './SVG/Serviesbannner';
import styled from 'styled-components';

const Styles = styled.div`
justify-content:center;
align-items:center;
padding:30px 20px 20px 20px;
`

function About(){
    return(
        <Styles>
            <Container>
  {/* Stack the columns on mobile by making one full-width and the other half-width */}
                <Row>
                  <Col xs={12} md={6}>
                  
                <h2 className="h2"> We are a Creative Digital
                    Agency &amp; Marketing Experts </h2>
                <p className="p"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus turpis nisl, vitae dictum mi
                    semper convallis. Ut sapien leo, varius ac dapibus a, cursus quis ante. </p>
                <p>
                    <small>Nunc sodales lobortis arcu, sit amet venenatis erat placerat a. Donec lacinia magna nulla,
                        cursus impediet augue egestas id. Suspendisse dolor lectus, pellentesque quis tincidunt ac,
                        dictum id neque.
                    </small>
                </p>
                <button className="button"><Link className="button_link" to ="/About">Learn More </Link></button>
                  </Col>
                  <Col xs={6} md={6}>
                  <Banner2/>
                  </Col>
                </Row>
            </Container>
        </Styles>
    )
}

export default About;