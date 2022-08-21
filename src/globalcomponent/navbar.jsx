import React, { useState } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    NavItem,
    NavLink,
    Nav,
    Row,
    Card, CardBody, CardTitle, CardText, Container
  } from "reactstrap";
  
  const NavbarBlok = props => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
            <Navbar  expand="md navbarcolor" >

                <NavbarBrand href="/">BRC</NavbarBrand>
                <NavbarToggler onClick={toggle} />

                
                <Collapse isOpen={isOpen} navbar >
                    <Nav className='ml-auto' navbar>
                    <NavItem>
                        <NavLink href="/#bestcar">Our Service</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/#whyus">Why us</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/#testimoni">Testimonial</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/#faq">FAQ</NavLink>
                    </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
    );
  };
  
  export default NavbarBlok;