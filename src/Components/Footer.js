import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Facebookicon from './SVG/facebook';
import Githubicon from './SVG/githubicon';

function Footer(){
    return(
        <div>
            <Container>
                <Row><Col xs={6}>
                    <h3>Created by <a href="https://github.com/jami-raza/">Jami Raza</a></h3>
                </Col>
                    <Col xs={6}>
                    <a href="https://www.facebook.com/profile.php?id=100008724766246"><Facebookicon/></a>
                    <a href="https://github.com/jami-raza/"><Githubicon/></a>
                    </Col>
                    </Row>
            </Container>
        </div>
    )
}
export default Footer;