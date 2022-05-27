import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

const Faq = () => {
    return (
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
    )
}

export default Faq;