import React from 'react';
import { Container, Navbar, Nav, Form } from "react-bootstrap";

const NavigationBar = () => {
    return (
        <Navbar bg="lightblue" expand="lg" sticky="top" className="py-4">
            <Container fluid>
                <Navbar.Brand href="/"></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto my-2 my-lg-0">
                        <Nav.Link href="/#services">Our Services</Nav.Link>
                        <Nav.Link href="/#why-us">Why Us</Nav.Link>
                        <Nav.Link href="/#testimonial">Testimonial</Nav.Link>
                        <Nav.Link href="/#faq">FAQ</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <a href="#" className="btn bg-lime ms-4">Register</a>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;
