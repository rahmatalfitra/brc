import React from "react";
import { Container, Card, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import { Link } from "react-router-dom";

const CardResult = ({item}) => {
    return (
        <Container>
            <Card className="cardtampilmobil">
                <img src= {item.image} />
                <CardTitle> {item.name} </CardTitle>
                <CardSubtitle> {item.price} </CardSubtitle>
                <CardText> {item.category} </CardText>

                <Button>
                    <Link to={`/mobil/${item.id}`}>
                        Detail
                    </Link>
                </Button>
            </Card>
        </Container>
    )
}

export default CardResult;