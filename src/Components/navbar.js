import React from 'react';
import { Link } from 'react-router-dom';
import  styled  from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import {DropdownButton} from 'react-bootstrap';
const Wrapper = styled.section`


width: 100%;
box-shadow: 0px 36px 44px rgba(15, 72, 72, 0.05);
padding-top: 20px;
padding-bottom: 20px;
padding-left: 20px;
.dropdownbutton{
    display:none
}
@media (max-width:720px) {
    .dropdownbutton{
      display:block
    }
    
  }    
`
const Logo = styled.div`
color:rgb(108, 99, 255);
font-size:32px;
text-transform:uppercase;
display:flex;
    text-decoration:none;
    text-weight:bold;
    font-weight:700;
.logo{
    
    }
@media (max-width:720px){
    .logo{
        margin:2px 10px 2px -10px
    }
}


`
const Menu = styled.ul`
position: relative;
display: flex;
justify-content: center;
align-items: center;
text-transform: uppercase;

.menu{
    display:block;
}
@media (max-width:720px){
    .menu{
        display:none;
    }


`
const Menuitem = styled.li`
position: relative;
  list-style: none;
.li-Link{
    position: relative;
    margin: 0 15px;
    text-decoration: none;
    color: rgb(108, 99, 255);
    font-family:OpenSans-Regular;
    letter-spacing: 1.5px;
    font-weight: light;
    transition: 0.6s;
    font-size:18px;
    margin-right:30px;
}
.menu{
    display:block;
}
@media (max-width:720px){
    .menu{
        display:none;
    }
`
const ButtonGroup = styled.div`
display:flex;

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
  `



 

function Navbar(){
    return(
    <Wrapper className="header navbar">
       <Logo className="logo">
           Solutions
        </Logo>
        <DropdownButton
        alignRight
        title="Menu"
        
            className="dropdownbutton"
>
<Menuitem><Link className="li-Link" to="/">Home</Link></Menuitem>
            <Menuitem><Link className="li-Link" to="/Services">Services</Link></Menuitem>
            <Menuitem><Link className="li-Link" to="/About">About</Link></Menuitem>
            <Menuitem><Link className="li-Link" to="/Projects">Projects</Link></Menuitem>
            <Menuitem><Link className="li-Link" to="/Contact-us">Contact us</Link></Menuitem>
</DropdownButton>
        <Menu className="menu">
            <Menuitem className="menu"><Link className="li-Link"  to="/"           smooth={true} offset={50} duration={500}>Home</Link></Menuitem>
            <Menuitem className="menu"><Link className="li-Link"  to="Services"  smooth={true} offset={50} duration={500}>Services</Link></Menuitem>
            <Menuitem className="menu"><Link className="li-Link"  to="/About"     smooth={true} offset={50} duration={500}>About</Link></Menuitem>
            <Menuitem className="menu"><Link className="li-Link"  to="/Projects"  smooth={true} offset={50} duration={500}>Projects</Link></Menuitem>
            <Menuitem className="menu"><Link className="li-Link"  to="/Contact-us"  smooth={true} offset={50} duration={500}>Contact us</Link></Menuitem>

            
                <ButtonGroup>
                  <button className="button"><a className="button_link"href="/Home">Login</a></button> 
                
                
                  <button className="button"><a className="button_link"href="/Home">Sign up</a></button> 
                </ButtonGroup>
                
            
   
        </Menu>
        
    </Wrapper>
    )
}
export default Navbar;