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
    Card, CardBody, CardTitle, CardText, Container
  } from "reactstrap";
  
  const NavbarBlok = props => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Container className='navbarcolor'>
            <Navbar  expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="justify-content-end" navbar>
                    <NavItem>
                        <NavLink href="/mobil">Cari Mobil</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/">GitHub</NavLink>
                    </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </Container>
      </div>
    );
  };
  
  export default NavbarBlok;