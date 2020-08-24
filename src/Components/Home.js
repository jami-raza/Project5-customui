import React from 'react';
import {Link} from 'react-router-dom';
import Typical from 'react-typical';
import {Container, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';
import Banner from './SVG/Banner';
import About from './About';
import Services from './Services';
import Contact from './Contactus';
import {motion} from 'framer-motion';
import Footer from './Footer';

const styling={
    hidden:{opacity:0},
    visible:{opacity:1,transition:{delay:1,ease:[0.43, 0.13, 0.23, 0.96]}}
}
const Homepage = styled.div`

.container{
    padding:70px 0px 10px 20px ;  
    text-align:left;
    justify-content:center;

}
.button{
    background-image:linear-gradient(0deg,rgb(108, 99, 255) 0%, rgb(160, 99, 255) 100%);
    border-radius:8px;
    box-shadow: unset;
    border-color:#fff;
    
  }
  .button_link{
    color:#fff;
    text-decoration:none;
    text-weight:bold;
    font-weight:600;
    padding:2px 2px 2px 2px;
  }
  .button_link:hover{
    color:whitesmoke;;
    text-decoration:none;
    font-weight: 700;
    padding:3px 2px 3px 2px;
  }
  .h2{
    padding:40px 1px 30px 2px;
    text-align:left;
    justify-content:center;
  }
  .p{
    padding:20px 1px 30px 2px;
    text-align:left;
    justify-content:center;
  }
  .typical{
      color:rgb(108, 99, 255);
  }

`


function Home(){

    
    return(
        
        <Homepage>
          <Container>
            <Row>
              <Col xs={8} md={4}><motion.h2 className="h2" 
              variants={styling}
              initial="hidden"
              animate="visible"
              > We promise to bring
                    the best solution for your <Typical className="typical"
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                        ' bussiness !',
                        
                        1000,
                        ' brand !',
                        1000,
                        ' company !',
                        1000

                    ]}
                    
                    ></Typical> </motion.h2>
                <p className="p"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus turpis nisl. </p>
                <button className="button"><Link className="button_link"  activeClass="active" to="Contact-us" spy={true} smooth={true} offset={50} duration={1000}>Contact Us </Link></button></Col>
              <Col xs={12} md={8}><Banner/></Col>
            </Row> 
          </Container> 
          <About/> 
          <Services/> 
          <Contact/>
          <Footer/>
        </Homepage>
    )
}

export default Home;