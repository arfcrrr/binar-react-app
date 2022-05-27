import '../assets/css/style.css';

import NavigationBar from '../components/NavigationBar';
import SideBar from '../components/SideBar';
import Hero from '../components/Hero';
import CarouselMain from '../components/CarouselMain';
import Footer from '../components/Footer';

import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import { ReactComponent as IconCheck } from '../assets/images/check.svg';
import { ReactComponent as IconComplete } from '../assets/images/icon_complete.svg';
import { ReactComponent as IconPrice } from '../assets/images/icon_price.svg';
import { ReactComponent as IconHours } from '../assets/images/icon_24hrs.svg';
import { ReactComponent as IconProfessional } from '../assets/images/icon_professional.svg';

const Home = () => {
    return (
        <Container fluid className="p-0 m-0">
            <NavigationBar />
            <SideBar />
            <Hero />

            {/* Section Services */}
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

            {/* Section Why Us */}
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

            {/* Section Testimonial */}
            <section id="testimonial">
                <Container className="d-flex flex-column align-items-center">
                    <div class="headline-text text-center">
                        <h2 class="title">Testimonial</h2>
                        <p class="subtitle my-4">Berbagai review positif dari para pelanggan kami</p>
                    </div>
                    <CarouselMain />
                </Container>
            </section>

            {/* Section Jumbotron Sewa */}
            <section id="jumbotron-sewa">
                <Container fluid className="d-flex flex-column align-items-center">
                    <div class="jumbotron text-white text-center d-flex flex-column align-items-center">
                        <h1 class="title">Sewa Mobil di Jakarta Timur Sekarang</h1>
                        <p class="fw-lighter my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a class="btn bg-lime btn-lg my-4" href="/cars" role="button">Mulai Sewa Mobil</a>
                    </div>
                </Container>
            </section>

            {/* Section FAQ */}
            <section id="faq">
                <Container fluid>
                    <Row>
                        <Col className="ms-5">
                            <h2 className="title my-3">Frequently Asked Question</h2>
                            <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        </Col>
                        <Col className="me-5">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Apa saja syarat yang dibutuhkan?</Accordion.Header>
                                    <Accordion.Body>
                                        <strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </strong>
                                        Nostrum soluta illum, tempore iure, expedita natus dicta ratione aliquid libero
                                        excepturi veniam sequi, quae labore animi repellat fuga? Natus, ullam veritatis!
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Berapa hari minimal sewa mobil lepas kunci?</Accordion.Header>
                                    <Accordion.Body>
                                        <strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </strong>
                                        Nostrum soluta illum, tempore iure, expedita natus dicta ratione aliquid libero
                                        excepturi veniam sequi, quae labore animi repellat fuga? Natus, ullam veritatis!
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Berapa hari sebelumnya sebaiknya booking sewa mobil?</Accordion.Header>
                                    <Accordion.Body>
                                        <strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </strong>
                                        Nostrum soluta illum, tempore iure, expedita natus dicta ratione aliquid libero
                                        excepturi veniam sequi, quae labore animi repellat fuga? Natus, ullam veritatis!
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Apakah ada biaya antar-jemput?</Accordion.Header>
                                    <Accordion.Body>
                                        <strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </strong>
                                        Nostrum soluta illum, tempore iure, expedita natus dicta ratione aliquid libero
                                        excepturi veniam sequi, quae labore animi repellat fuga? Natus, ullam veritatis!
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Bagaimana jika terjadi kecelakaan?</Accordion.Header>
                                    <Accordion.Body>
                                        <strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </strong>
                                        Nostrum soluta illum, tempore iure, expedita natus dicta ratione aliquid libero
                                        excepturi veniam sequi, quae labore animi repellat fuga? Natus, ullam veritatis!
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Footer />

        </Container>
    )
}

export default Home;