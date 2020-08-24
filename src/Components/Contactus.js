import React from 'react'
import { Link } from 'react-router-dom';
import { Form,Col} from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
padding:120px 10px 10px 20px;
.form{
    padding:10px 10px 20px  ;
}
.button{
    background-image:linear-gradient(0deg, rgb(108, 99, 255) 0%, rgb(128, 99, 255) 100%);
    border-radius:8px;
    box-shadow: unset;
    border-color:#fff;
    
  }
  .button_link{
    color:#fff;
    text-decoration:none;
    text-weight:bold;
    font-weight:600;
    padding:5px 0;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform.4s linear;
  }
  .button_link:hover{
    color:whitesmoke;;
    text-decoration:none;
    
    
  }
  .h1{
    color:rgb(108, 99, 255);
    text-decoration:underline;
    text-decoration-color:rgb(150, 150, 255)
  }
`
function Contact(){
    return(
        <Styles>
            <h1 className="h1"> Contact Us </h1>
            <Form style={{width:"500px"}} >
  <Form.Row>
    <Col className="form">
      <Form.Control  placeholder="First name" />
    </Col>
    <Col className="form">
      <Form.Control placeholder="Last name" />
    </Col>
    </Form.Row>
    <Form.Row>
    <Col className="form" xs={8}>
      <Form.Control placeholder="Email" />
      </Col>
    <Col className="form" xs={8}>
      <Form.Control placeholder="Phone Number" />
    </Col>
    </Form.Row>
<button className="button"><Link className="button_link" to="/">Submit</Link></button>
  
</Form>

        </Styles>
    )
}

export default Contact;