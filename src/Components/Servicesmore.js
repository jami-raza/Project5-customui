import React from 'react';
import {Card,CardDeck,Container,} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
const Servicedata = {
    "Web designing":{
        "name":"Web Designer",
        "desc":"Nullam quis libero in lorem accumsan sodales. Nam vel nisi eget.",
        "image":"https://icon-library.com/images/webdesign-icon/webdesign-icon-24.jpg"

    },
    "Web Development":{
        "name":"Web Development",
        "desc":"Nullam quis libero in lorem accumsan sodales. Nam vel nisi eget.",
        "image":"https://icon-library.com/images/web-developer-icon/web-developer-icon-4.jpg"

    },
    "SEO":{
        "name":"SEO",
        "desc":"Nullam quis libero in lorem accumsan sodales. Nam vel nisi eget.",
        "image":"https://creativflux.com/wp-content/uploads/2018/10/seo-icon.png"

    },
   
    "Digital Marketing":{
        "name":"Digital Marketing",
        "desc":"Nullam quis libero in lorem accumsan sodales. Nam vel nisi eget.",
        "image":"https://rankur.com/wp-content/uploads/2015/06/digitalmarketing.png"

    }
}
function MoreServices(){

    
    

    return(
        
        <div className="grid">
            {Object.keys(Servicedata).map(keyName =>{
        const servicesdata = Servicedata[keyName];
        return(
            
            <Container class="col">
                
                    
                        
                        <CardDeck style={{width:"300px"}}>
                        <Card  >
                            <Card.Body>
                            <Card.Img variant="top" src={servicesdata.image} ></Card.Img>
                                   
                               
                            <Card.Title>
                               {servicesdata.name} 
                            </Card.Title>
                            <Card.Text>{servicesdata.desc}</Card.Text>
                            
                            </Card.Body>
                        </Card>
                        </CardDeck>
                    
                    
                
            </Container>)
            })}
        </div>
    )
                    

}

export default MoreServices;