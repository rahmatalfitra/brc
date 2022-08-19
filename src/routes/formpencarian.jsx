import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Form, FormGroup, Input, Label, Col, Row, Button, Card, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import Car from "./mobil";

const FormPencarian = ({mobil, setFilteredData}) => {
    const [car, setCar] = useState([]);
    const [loading, setLoading] = useState(false);
    const [carFiltered, setCarFiltered] = useState("");
    const controller = new AbortController();

    const [formNamaMobil, setFormNamaMobil ] = useState();
    const [formKategori, setFormKategori ] = useState();
    const [formHarga, setFormHarga] = useState();
    const [formStatus, setFormStatus] = useState();

    const loadCar = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get("https://bootcamp-rent-car.herokuapp.com/admin/car", {
                // signal: controller.signal,
            });
            setCar(data);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        loadCar();
        return() => {
            controller.abort();
        };
    }, []);

    const handleSubmit = () =>{
        alert(formNamaMobil)
        const carsFiltered = mobil.filter((item) => {
            return item.name === formNamaMobil
        })
        setCarFiltered(carsFiltered);
    };

    //onClick
    //onChange
    //onKeyUp
    //onKeyDown


    return (
        <>
        <Container>
            <p>Form Pencaharian</p>

            <Form>
                <FormGroup>
                    <Label>Nama Mobil</Label>
                    <Col sm={4}>
                        <Input 
                            id="namamobil"
                            placeholder="Nama Mobil"
                            type="text"
                            onChange={(e)=>{setFormNamaMobil(e.target.value)}}
                            />
                    </Col>
                </FormGroup>

                <Button id="buttoncari" type="submit" onClick={()=>{handleSubmit()}} > Cari Mobil</Button>

            </Form>
        </Container>

        <Container>
        <h3>Ini halaman mobil</h3>

        {!loading ? (
            <Row className="rowcard">
                {car.length &&
                    car.filter((val) => {
                        if (formNamaMobil == "") {
                            return val
                        } else if (val.name.toLowerCase().includes(formNamaMobil.toLowerCase())) {
                            return val
                        }
                    }).map((mobil, key) => {
                        return (
                            <Card className="cardtampilmobil">
                            <img src= {mobil.image} />
                            <CardTitle> {mobil.name} </CardTitle>
                            <CardSubtitle> {mobil.price} </CardSubtitle>
                            <CardText> {mobil.category} </CardText>

                            <Button>
                            <Link to={`/mobil/${mobil.id}`} key={key}>
                                Detail
                            </Link>
                            </Button>
                    </Card>
                        )
                    })
                }


            </Row>
        ) : (
            <h2>Loading...</h2>
        )}
        </Container>
    </>
    )
};

export default FormPencarian;