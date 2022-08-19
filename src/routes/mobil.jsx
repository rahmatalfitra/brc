import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row } from 'reactstrap';

import './mobil.css';
import NavbarBlok from "../globalcomponent/navbar";
import FormHandling from "./formcari";
import CardResult from "./cardresult";

const Car = () => {
    const [car, setCar] = useState([]); //data lama
    const [result, setResult] = useState(); //data baru
    const [loading, setLoading] = useState(false);
    const controller = new AbortController();

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

    const getID = (url) => {
        const parsed = url?.split("/");
        return parsed[parsed.length - 2];
    };

    useEffect(() => {
        loadCar();
    }, []);
    
    console.log(car);

    return(
        <>
        <NavbarBlok />

        <h3>Ini halaman mobil</h3>
        {!loading ? (
            <Row className="rowcard">
            { car && car.length &&
                <FormHandling mobil={car} setResult={setResult} />}
            { result && result.map((e) => <CardResult item={e} />)}
            </Row>
        ) : (
            <h2>Loading...</h2>
        )}
        
        </>
    );
};

export default Car;