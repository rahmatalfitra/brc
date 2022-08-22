import React from "react";
import { Row, Col, Container } from 'reactstrap';
import './404notfound.css';

const NotFound = () => {
    return(
        <>
        <Container className="textalign padding">
        <h2>Ops! Too dangerous!!</h2>
        <h3>Go back!!!</h3>
        <h6>404 Page Not Found</h6>
        </Container>
        </>
    )
}

export default NotFound;