import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Button, Card, CardBody, CardTitle, CardText, Col, Container, Navbar, Row, Accordion, AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";

import NavbarBlok from "../globalcomponent/navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./home.css";
import Footer from "../globalcomponent/footer";

const LandingPage = () => {
    
    const Header = () => {
        return(
        <Row className="headerblock" id="header">
            <Col className="leftheadercol">
                <h1>Sewa & Rental Mobil Terbaik di Sumatera Barat</h1>
                <br/>
                <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau.Siap melayani setiap kebutuhanmu untuk sewamobil selama 24 jam.</p>
                <a href="./mobil">
                <Button className="button">Mulai Sewa Mobil</Button>
                </a>
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
            <Row className="rowblock2" id="bestcar">
                    <Col>
                        <img className="imagerowblock2" src="./images/our-services-image.png" />
                    </Col>
                    <Col className="isiblok2">
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
    
    const WhyUS = () => {
        return(
            <>
            <Container id="whyus">
            <h3 className="center"><b>Why Us</b></h3>
            <p className="center">Mengapa Harus Pilih Binar Rental Car?</p>

            <Row className="whyusblok3">
                <Card className="cardbox">
                    <CardBody>
                    <img className="iconwhyus iconyellow" src="./icon/thumbs-up.png" />
                        <CardTitle><b>Mobil Lengkap</b></CardTitle>
                        <CardText className="textcard">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat.</CardText>
                    </CardBody>
                </Card>

                <Card className="cardbox">
                    <CardBody>
                    <img className="iconwhyus iconred" src="./icon/sale.png" />
                        <CardTitle><b>Harga Murah</b></CardTitle>
                        <CardText className="textcard">Harga murah dan bersaing. Bisa bandingkan harga kami dengan rental car yang lain.</CardText>
                    </CardBody>
                </Card>

                <Card className="cardbox">
                    <CardBody>
                    <img className="iconwhyus iconblue" src="./icon/24jam.png" />
                        <CardTitle><b>Layanan 24 Jam</b></CardTitle>
                        <CardText className="textcard">Siap melayani kebutuhan anda 24 jam non stop. Kami juga tersedia di akhir minggu</CardText>
                    </CardBody>
                </Card>

                <Card className="cardbox">
                    <CardBody>
                    <img className="iconwhyus icongreen" src="./icon/pro.png" />
                        <CardTitle><b>Sopir Profesional</b></CardTitle>
                        <CardText className="textcard">Sopir yang profesional, berpengalaman, jujur, ramah dan tepat waktu.</CardText>
                    </CardBody>
                </Card>
            </Row>
            </Container>
            </>
        )
    }

    const Testimoni = () => {
        return(
            <>
            <Row id="testimoni">
            <h3 className="center"><b>Testimonial</b></h3>
            <p className="center">Berbagai review positif dari para pelanggan kami.</p>
            </Row>

            <Carousel showArrows={true} autoPlay >
                <Container className="bloktestimoni">
                    <Row className="bloktestimoni2">
                        <Col className="testigambar">
                            <img className="bulat" src="./images/person1.jpg" />
                        </Col>
                        <Col className="testitulisan">
                            ⭐⭐⭐⭐
                            <p>Anim magna laboris commodo quis Lorem. Laborum in culpa esse mollit exercitation ea voluptate cupidatat eiusmod. Ad id quis labore cupidatat in sit mollit eiusmod voluptate consequat consectetur ullamco in ipsum. Dolor irure officia adipisicing enim ex sint cillum fugiat ea consequat aliquip et. Voluptate reprehenderit esse fugiat magna nostrud. Exercitation laborum duis nostrud cillum reprehenderit consectetur laborum fugiat cillum.</p>
                            <p>John Dee 32, Bromo</p>
                        </Col>
                    </Row>
                </Container>

                <Container className="bloktestimoni">
                    <Row className="bloktestimoni2">
                        <Col className="testigambar">
                            <img className="bulat" src="./images/person2.jpg" />
                        </Col>
                        <Col className="testitulisan">
                            <div>
                            ⭐⭐⭐⭐
                            <p>Anim magna laboris commodo quis Lorem. Laborum in culpa esse mollit exercitation ea voluptate cupidatat eiusmod. Ad id quis labore cupidatat in sit mollit eiusmod voluptate consequat consectetur ullamco in ipsum. Dolor irure officia adipisicing enim ex sint cillum fugiat ea consequat aliquip et. Voluptate reprehenderit esse fugiat magna nostrud. Exercitation laborum duis nostrud cillum reprehenderit consectetur laborum fugiat cillum.</p>
                            <p>John Dee 32, Bromo</p>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container className="bloktestimoni">
                    <Row className="bloktestimoni2">
                        <Col className="testigambar">
                            <img className="bulat" src="./images/person3.jpg" />
                        </Col>
                        <Col className="testitulisan">
                            <div>
                            ⭐⭐⭐⭐
                            <p>Anim magna laboris commodo quis Lorem. Laborum in culpa esse mollit exercitation ea voluptate cupidatat eiusmod. Ad id quis labore cupidatat in sit mollit eiusmod voluptate consequat consectetur ullamco in ipsum. Dolor irure officia adipisicing enim ex sint cillum fugiat ea consequat aliquip et. Voluptate reprehenderit esse fugiat magna nostrud. Exercitation laborum duis nostrud cillum reprehenderit consectetur laborum fugiat cillum.</p>
                            <p>John Dee 32, Bromo</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Carousel>
            </>
        )
    }

    const SewaMobilSekarang = () => {
        return(
            <>
            <Container className="jarak">
            <Container className="backsewamobil">
                <Container className="sewamobil">
                    <h3><b>Sewa Mobil di Sumatera Barat Sekarang</b></h3>
                    <br />
                    <p>Ut ex consectetur nisi excepteur veniam. Quis id sit proident sunt est. Eu occaecat consectetur veniam proident id. Eu voluptate officia excepteur aliquip tempor dolor.</p>
                    <br/>
                    <a href="./mobil">
                    <button className="button">Mulai Sewa Mobil</button>
                    </a>
                </Container>
            </Container>
            </Container>
            </>
        )
    }

    const FAQ = (props) => {
        const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <Container className="faqblok" id="faq">
    <Row className="rowfaq">
        <Col className="faqblokleft">
        <h3 className="centerfaq">Frequently Asked Question</h3>
        <p className="faqdes centerfaq">Laborum tempor ut elit eu incididunt sunt et nulla irure fugiat laboris adipisicing officia. Adipisicing culpa sunt ex nisi deserunt amet sint esse irure do reprehenderit irure anim.</p>
        </Col>

        <Col>
        <Accordion open={open} toggle={toggle}>
            <AccordionItem>
                <AccordionHeader targetId="1">Apa saja syarat yang dibutuhkan?</AccordionHeader>
                <AccordionBody accordionId="1">
                    <strong>This is the first item&#39;s accordion body.</strong>
                    You can modify any of this with custom CSS or overriding our default
                    variables. It&#39;s also worth noting that just about any HTML can
                    go within the <code>.accordion-body</code>, though the transition
                    does limit overflow.
                </AccordionBody>
            </AccordionItem>
            
            <AccordionItem>
                <AccordionHeader targetId="2">Berapahari minimal sewa mobil lepas kunci?</AccordionHeader>
                <AccordionBody accordionId="2">
                    <strong>This is the second item&#39;s accordion body.</strong>
                    You can modify any of this with custom CSS or overriding our default
                    variables. It&#39;s also worth noting that just about any HTML can
                    go within the <code>.accordion-body</code>, though the transition
                    does limit overflow.
                </AccordionBody>
            </AccordionItem>
            
            <AccordionItem>
                <AccordionHeader targetId="3">Berapa hari sebelumnya sebaiknya sewa mobil?</AccordionHeader>
                <AccordionBody accordionId="3">
                    <strong>This is the third item&#39;s accordion body.</strong>
                    You can modify any of this with custom CSS or overriding our default
                    variables. It&#39;s also worth noting that just about any HTML can
                    go within the <code>.accordion-body</code>, though the transition
                    does limit overflow.
                </AccordionBody>
            </AccordionItem>

            <AccordionItem>
                <AccordionHeader targetId="4">Apakah ada biaya antar-jemput?</AccordionHeader>
                <AccordionBody accordionId="4">
                    <strong>This is the third item&#39;s accordion body.</strong>
                    You can modify any of this with custom CSS or overriding our default
                    variables. It&#39;s also worth noting that just about any HTML can
                    go within the <code>.accordion-body</code>, though the transition
                    does limit overflow.
                </AccordionBody>
            </AccordionItem>

            <AccordionItem>
                <AccordionHeader targetId="5">Bagaimana jika terjadi kecelakaan?</AccordionHeader>
                <AccordionBody accordionId="5">
                    <strong>This is the third item&#39;s accordion body.</strong>
                    You can modify any of this with custom CSS or overriding our default
                    variables. It&#39;s also worth noting that just about any HTML can
                    go within the <code>.accordion-body</code>, though the transition
                    does limit overflow.
                </AccordionBody>
            </AccordionItem>

        </Accordion>
        </Col>
    </Row>
    </Container>
  );
    }

    return(
    <>
    <NavbarBlok />
    <Header />
    <BestCar />
    <WhyUS />
    <Testimoni />
    <SewaMobilSekarang />
    <FAQ />
    <Footer/>
    </>
    )
};

export default LandingPage;
