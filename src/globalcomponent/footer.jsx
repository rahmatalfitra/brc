import React from "react";
import {Row, Col, Container, Badge, NavItem, NavLink, Nav} from "reactstrap";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './footer.css';

const Footer = () => {
    return (
        <>
        <Container className="footer">
        <Row className="footerrow">
            <Col className="paddingright paddingtop5">
                <h6>Jalan Suroyo No. 161 Mayangan Kota Probolinggo 672000</h6>
                <p><b>binarcarrental@gmail.com</b></p>
                <p><b>081-233-334-808</b></p>
            </Col>

            <Col className="linkmenu">
                <Nav className="navlinkfooter">
                    <NavLink href="/#bestcar">Our Services</NavLink>
                    <NavLink href="/#whyus">Why Us</NavLink>
                    <NavLink href="/#testimoni">Testimonial</NavLink>
                    <NavLink href="/#faq">FAQ</NavLink>
                </Nav>
            </Col>

            <Col className="paddingtop5">
                <h6>Connect with us :</h6>
                <Row className="iconfooter">
                    <Col>
                    <NavLink href="">
                        <img className="imgfooter" src="./icon/ig.png"/>
                    </NavLink>
                    </Col>

                    <Col>
                    <NavLink href="">
                        <img className="imgfooter" src="./icon/fb.png"/>
                    </NavLink>
                    </Col>

                    <Col>
                    <NavLink href="">
                        <img className="imgfooter" src="./icon/mail.png"/>
                    </NavLink>
                    </Col>

                    <Col>
                    <NavLink href="">
                        <img className="imgfooter" src="./icon/twitter.png"/>
                    </NavLink>
                    </Col>
                
                    <Col>
                    <NavLink href="">
                        <img className="imgfooter" src="./icon/twitch.png"/>
                    </NavLink>
                    </Col>
                </Row>
            </Col>

            <Col className="paddingtop5">
                <h6 className="paddingleft copyright">Copyright Binar 2022</h6>
            </Col>

        </Row>
        </Container>
        </>
    )
}

export default Footer;