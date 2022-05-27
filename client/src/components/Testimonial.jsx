import React from 'react';
import { Container } from 'react-bootstrap';
import CarouselMain from './CarouselMain';

const Testimonial = () => {
    return (
        <section id="testimonial" >
            <Container className="d-flex flex-column align-items-center">
                <div class="headline-text text-center">
                    <h2 class="title">Testimonial</h2>
                    <p class="subtitle my-4">Berbagai review positif dari para pelanggan kami</p>
                </div>
                <CarouselMain />
            </Container>
        </section >
    )
}

export default Testimonial;