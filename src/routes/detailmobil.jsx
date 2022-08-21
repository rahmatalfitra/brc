import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import NavbarBlok from "../globalcomponent/navbar";
import { Row, Col, Container } from 'reactstrap';

import "./detailmobil.css";
import FormHandling from "./formcari";
import Footer from "../globalcomponent/footer";

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
        <Row className="rowbackcolor"></Row>
        <FormHandling />

        {!loading ? (
            <Container className="padding" >
            <Row className="rowdisplay">
                <Col className="colkiri">
                    <h6><b>Tentang Paket</b></h6>
                    <b>Include</b>
                    <ul>
                        <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                        <li>Sudah termasuk bensin selama 12 jam</li>
                        <li>Sudah termasuk tiket wisata</li>
                        <li>Sudah termasuk pakaj</li>
                    </ul>
                    <br></br>
                    <b>Exclude</b>
                    <ul>
                        <li>Tidak termasuk biaya makan sopit Rp. 75.000,-/ hari</li>
                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp. 20.000,-/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                    </ul>
                    <br></br>
                    <b>Refund, Reschedule, Overtime</b>
                    <ul>
                        <li>Tidak termasuk biaya makan sopir Rp. 75.000,-/hari</li>
                        <li>JIka overtime lebih dari 12 jam akan ada tambahan biaya Rp. 20.000,-/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        <li>Tidak termasuk biaya makan sopir Rp. 75.000,-/hari</li>
                        <li>JIka overtime lebih dari 12 jam akan ada tambahan biaya Rp. 20.000,-/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                        <li>Tidak termasuk biaya makan sopir Rp. 75.000,-/hari</li>
                        <li>JIka overtime lebih dari 12 jam akan ada tambahan biaya Rp. 20.000,-/jam</li>
                        <li>Tidak termasuk akomodasi penginapan</li>
                    </ul>
                </Col>

                <Col  >
            <div className="colkanan">
                <div>
                    <img className="imgdetail" src={detail?.image} />
                </div>
        
                <div>
                    <h6>{detail?.name}</h6>
                    <p>{detail?.category}</p>
                </div>
        
                <div>
                    <h6 className="justify">Harga Mobil : {detail?.price}</h6>
                </div>
            </div>
                </Col>
            </Row>
            </Container>
        ) : (
            <h5>Loading...</h5>
        )}

        <Footer />
        </>
    );
    
};

export default MobilDetail;