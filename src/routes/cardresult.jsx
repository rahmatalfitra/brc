import React from "react";
import { Container, Card, CardTitle, CardSubtitle, CardText, Button, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const CardResult = ({item}) => {
    return (
        // <Container>
            <Row className="cardtampilmobil">
                <Card className="cardmobil" style={{width: '18rem' }}>
                        <img className="cardimage" src= {item.image} alt="Gambar mobil" />
                        <CardTitle> {item.name} </CardTitle>
                        <CardSubtitle> {item.price} </CardSubtitle>
                        <CardText> {item.category} </CardText>
                        <CardText className="carddetail">Deserunt pariatur deserunt quis adipisicing amet ex minim adipisicing ipsum aliqua aliquip laboris.</CardText>

                        <a href={`/mobil/${item.id}`}>
                            <Button className="buttoncard">Detail</Button>
                        </a>
                </Card>
            </Row>
        // </Container>
    )
}

export default CardResult;