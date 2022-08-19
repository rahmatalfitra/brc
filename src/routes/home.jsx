import React from "react";
import { Button, Col, Container, Navbar, Row } from "reactstrap";
import NavbarBlok from "../globalcomponent/navbar";
import "./home.css";

const LandingPage = () => {
    
    const Header = () => {
        return(
        <Row className="headerblock">
            <Col className="leftheadercol">
                <h1>Sewa & Rental Mobil Terbaik di Sumatera Barat</h1>
                <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau.Siap melayani setiap kebutuhanmu untuk sewamobil selama 24 jam.</p>
                <Button>Mulai Sewa Mobil</Button>
            </Col>

            <Col className="rightheadercol">
                <Col className="imageheadbackground"></Col>
                <img className="imageheadblock" src="./images/mercedez-headbar-image.png" />
            </Col>
        </Row>
        );
    };

    const BestCar = () => {
        return(
            <Row className="rowblock2">
                    <Col>
                        <img className="imagerowblock2" src="./images/our-services-image.png" />
                    </Col>
                    <Col>
                        <h2>Best Rental Car for any Kind of Trip in Sumatera Barat</h2>
                        <p>Sewa mobil di Sumatera Barat bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                        <ul>
                            <li>Sewa Mobil dan Supir di Sumatera Barat 12 jam</li>
                            <li>Sewa Mobil Lepas Kundi di Sumatera Barat 24 jam</li>
                            <li>Sewa Mobil Jangka Panjang Bulanan</li>
                            <li>Gratis Antar Jemput Mobil di Bandara</li>
                            <li>Layanan Airport Transfer / Drop In Out</li>
                        </ul>
                    </Col>
            </Row>
        );
    };
    
    return(
    <>
    <NavbarBlok />
    <Header />
    <BestCar />
    </>
    )
};

export default LandingPage;
