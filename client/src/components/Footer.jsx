import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import IconFacebook from '../assets/images/icon_facebook.svg';
import IconInstagram from '../assets/images/icon_instagram.svg';
import IconTwitter from '../assets/images/icon_twitter.svg';
import IconMail from '../assets/images/icon_mail.svg';
import IconTwitch from '../assets/images/icon_twitch.svg';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row className="d-flex flex-row justify-content-center">
                    <Col md="auto" id="contact">
                        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                        <p>binarcarrental@gmail.com</p>
                        <p>081-233-334-808</p>
                    </Col>
                    <Col md="auto" className="mx-5 mb-3">
                        <p className="menu">Our Services</p>
                        <p className="menu">Why Us</p>
                        <p className="menu">Testimonial</p>
                        <p className="menu">FAQ</p>
                    </Col>
                    <Col md="auto" className="mx-5 mb-3">
                        <Row>
                            <Col><p>Connect with us</p></Col>
                        </Row>
                        <Row className="d-flex flex-row justify-content-start">
                            <Col className="icon-footer me-3"><img src={IconFacebook} /></Col>
                            <Col className="icon-footer me-3"><img src={IconInstagram} /></Col>
                            <Col className="icon-footer me-3"><img src={IconTwitter} /></Col>
                            <Col className="icon-footer me-3"><img src={IconMail} /></Col>
                            <Col className="icon-footer me-3"><img src={IconTwitch} /></Col>
                        </Row>
                    </Col>
                    <Col md="auto" className="mx-5 mb-3">
                        <p>Copyright Binar 2022</p>
                        <div className="navbar-brand"></div>
                    </Col>
                </Row>
            </Container>
        </footer >
    );
}

export default Footer;