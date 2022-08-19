import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import NavbarBlok from "../globalcomponent/navbar";

import "./detailmobil.css";

const MobilDetail = () => {
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(false);
    const {id} = useParams();
    const controller = new AbortController();

    const loadDetail = async () => {
        setLoading(true);
        try {
            const url = "https://bootcamp-rent-car.herokuapp.com/admin/car/" + id;
            const { data } = await axios.get(url, {
                // signal: controller.signal,
            });

            setDetail(data);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        loadDetail();

        return () => {
            controller.abort();
        };
    }, []);

    return (
        <>
        <NavbarBlok />
        <header>
        <h3>Ini halaman detail</h3>
        </header>

        {!loading ? (
            <div>
                <div>
                    <img src={detail?.image} />
                </div>
        
                <div>
                    <h2>Nama Mobil</h2>
                    <p>{detail?.name}</p>
                </div>
        
                <div>
                    <h2>Harga Mobil</h2>
                    <p>{detail?.price}</p>
                </div>
            </div>
        ) : (
            <h2>Loading...</h2>
        )}
        </>
    );
    
};

export default MobilDetail;