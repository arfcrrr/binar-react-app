import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import { ReactComponent as IconComplete } from '../assets/images/icon_complete.svg';
import { ReactComponent as IconPrice } from '../assets/images/icon_price.svg';
import { ReactComponent as IconHours } from '../assets/images/icon_24hrs.svg';
import { ReactComponent as IconProfessional } from '../assets/images/icon_professional.svg';

const WhyUs = () => {
    return (
        <section id="why-us">
            <Container>
                <h2 class="title">Why Us?</h2>
                <p class="subtitle my-4">Mengapa harus pilih Binar Car Rental?</p>
                <Container className="container-card">
                    <Row>
                        <Col>
                            <Container className="container-card">
                                <Card>
                                    <Card.Body>
                                        <IconComplete />
                                        <Card.Title className="title text-start my-3">Mobil Lengkap</Card.Title>
                                        <Card.Text>
                                            Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </Col>
                        <Col>
                            <Container className="container-card">
                                <Card>
                                    <Card.Body>
                                        <IconPrice />
                                        <Card.Title className="title text-start my-3">Harga Murah</Card.Title>
                                        <Card.Text>
                                            Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </Col>
                        <Col>
                            <Container className="container-card">
                                <Card>
                                    <Card.Body>
                                        <IconHours />
                                        <Card.Title className="title text-start my-3">Layanan 24 Jam</Card.Title>
                                        <Card.Text>
                                            Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </Col>
                        <Col>
                            <Container className="container-card">
                                <Card>
                                    <Card.Body>
                                        <IconProfessional />
                                        <Card.Title className="title text-start my-3">Sopir Profesional</Card.Title>
                                        <Card.Text>
                                            Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    )
}

export default WhyUs;