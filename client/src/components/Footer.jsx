import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { ReactComponent as IconFacebook } from '../assets/images/icon_facebook.svg';
import { ReactComponent as IconInstagram } from '../assets/images/icon_instagram.svg';
import { ReactComponent as IconTwitter } from '../assets/images/icon_twitter.svg';
import { ReactComponent as IconMail } from '../assets/images/icon_mail.svg';
import { ReactComponent as IconTwitch } from '../assets/images/icon_twitch.svg';

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
                        <p class="menu">Our Services</p>
                        <p class="menu">Why Us</p>
                        <p class="menu">Testimonial</p>
                        <p class="menu">FAQ</p>
                    </Col>
                    <Col md="auto" className="mx-5 mb-3">
                        <Row>
                            <Col><p>Connect with us</p></Col>
                        </Row>
                        <Row className="d-flex flex-row justify-content-start">
                            <Col className="icon-footer me-3"><IconFacebook /></Col>
                            <Col className="icon-footer me-3"><IconInstagram /></Col>
                            <Col className="icon-footer me-3"><IconTwitter /></Col>
                            <Col className="icon-footer me-3"><IconMail /></Col>
                            <Col className="icon-footer me-3"><IconTwitch /></Col>
                        </Row>
                    </Col>
                    <Col md="auto" className="mx-5 mb-3">
                        <p>Copyright Binar 2022</p>
                        <div class="navbar-brand"></div>
                    </Col>
                </Row>
            </Container>
        </footer >
    );
}

export default Footer;