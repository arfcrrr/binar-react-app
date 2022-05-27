import React from 'react';
import { Container } from 'react-bootstrap';

const Jumbotron = () => {
    return (
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
    )
}

export default Jumbotron;