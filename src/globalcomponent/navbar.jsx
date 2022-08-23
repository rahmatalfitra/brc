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
  
  const NavbarBlok = () => {

    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    
    const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      {/* <NavbarBrand href='/' className='navbarbrand'>BRC</NavbarBrand> */}
      {/* <a href="#" className="nav__brand">
        
      </a> */}
      <ul>
        <li className='navbarbrand'>
            <NavLink href="#" className="nav__link">
            BRC
            </NavLink>
        </li>
      </ul>

      <ul className={active}>
        <li className="nav__item linav">
          <NavLink href="/#bestcar" className="nav__link">
            Our Services
          </NavLink>
        </li>
        <li className="nav__item linav">
          <NavLink href="/#whyus" className="nav__link">
            Why Us
          </NavLink>
        </li>
        <li className="nav__item linav">
          <NavLink href="/#testimoni" className="nav__link">
            Testimonial
          </NavLink>
        </li>
        <li className="nav__item linav">
          <NavLink href="/#faq" className="nav__link">
            FAQ
          </NavLink>
        </li>
      </ul>

      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );


    // const [isOpen, setIsOpen] = useState(false);
  
    // const toggle = () => setIsOpen(!isOpen);
  
    // return (
    //         <Navbar  expand="md navbarcolor" >

    //             <NavbarBrand href="/">BRC</NavbarBrand>
    //             <NavbarToggler onClick={toggle} />

                
    //             <Collapse isOpen={isOpen} navbar >
    //                 <Nav className='ml-auto' navbar>
    //                 <NavItem>
    //                     <NavLink href="/#bestcar">Our Service</NavLink>
    //                 </NavItem>
    //                 <NavItem>
    //                     <NavLink href="/#whyus">Why us</NavLink>
    //                 </NavItem>
    //                 <NavItem>
    //                     <NavLink href="/#testimoni">Testimonial</NavLink>
    //                 </NavItem>
    //                 <NavItem>
    //                     <NavLink href="/#faq">FAQ</NavLink>
    //                 </NavItem>
    //                 </Nav>
    //             </Collapse>
    //         </Navbar>
    //);
  };
  
  export default NavbarBlok;