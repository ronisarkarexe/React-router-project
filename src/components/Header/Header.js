import React from 'react';
import { Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../image/stadium.jpg';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
   return (
      <div>
         <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="mr-auto">
                  <Nav.Link className="nave-home" as={Link} to="/"><FontAwesomeIcon icon={faHouseUser}/> Home</Nav.Link>
               </Nav>
               <Form inline>
                  <Navbar.Brand href="#home">International Champions Cup</Navbar.Brand>
               </Form>
            </Navbar.Collapse>
         </Navbar>
      </div>
   );
};

export default Header;