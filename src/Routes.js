import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Components/navbar';
import Home from './Components/Home';
import Services from './Components/Services';
import About from './Components/About';
import Contact from './Components/Contactus';
import MoreServices from './Components/Servicesmore';


function Linkrouter(){
    return(
        <div>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="Services" element={<Services/>} />
                <Route path="Fullservices" element={<MoreServices/>} />   
                <Route path="About" element={<About/>} />
                <Route path="Contact-us" element={<Contact/>} /> 
            </Routes>
        </Router>
        </div>
    )
}
export default Linkrouter;