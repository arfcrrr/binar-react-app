import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ReactComponent as IconCheck } from '../assets/images/check.svg';

const Services = () => {
    return (
        <section id="services">
            <Container>
                <Row className="mx-auto">
                    <Col md>
                        <img src={require("../assets/images/img_service.png")} className="right-image img-fluid my-auto" id="services-image"
                            alt="Binar Services"></img>
                    </Col>
                    <Col sm>
                        <h2 className="title title-long my-4">Best Car Rental for any kind of trip in East Jakarta!</h2>
                        <p>Sewa mobil di Jakarta Timur bersama Binar Car Rental jaminan harga lebih murah dibandingkan
                            yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata,
                            bisnis, wedding, meeting, dll.</p>
                        <div className="d-flex flex-row">
                            <IconCheck />
                            <p className="ms-3">Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                        </div>
                        <div className="d-flex flex-row">
                            <IconCheck />
                            <p className="ms-3">Sewa Mobil Jangka Panjang Bulanan</p>
                        </div>
                        <div className="d-flex flex-row">
                            <IconCheck />
                            <p className="ms-3">Gratis Antar - Jemput Mobil di Bandara</p>
                        </div>
                        <div className="d-flex flex-row">
                            <IconCheck />
                            <p className="ms-3">Layanan Airport Transfer / Drop In Out</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Services;