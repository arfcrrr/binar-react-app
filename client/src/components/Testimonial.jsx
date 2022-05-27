import React from 'react';
import { Container } from 'react-bootstrap';
import CarouselMain from './CarouselMain';

const Testimonial = () => {
    return (
        <section id="testimonial" >
            <Container className="d-flex flex-column align-items-center">
                <div className="headline-text text-center">
                    <h2 className="title">Testimonial</h2>
                    <p className="subtitle my-4">Berbagai review positif dari para pelanggan kami</p>
                </div>
                <CarouselMain />
            </Container>
        </section >
    )
}

export default Testimonial;