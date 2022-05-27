import { Row, Col } from 'react-bootstrap';

const Hero = () => {
    return (
        <section id="hero" className="bg-lightblue" >
            <Row className="row row-hero bg-lightblue ms-4">
                <Col className="my-auto mx-5">
                    <h1 className="title title-long my-4">Sewa &amp; Rental Mobil Terbaik di kawasan Jakarta Timur!</h1>
                    <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    <a href="cars" className="btn btn-auto bg-lime my-2 mb-4">Mulai Sewa Mobil</a>
                </Col>
                <Col md>
                    <img src={require("../assets/images/img_car.png")} className="right-image img-fluid" alt="Binar Car"></img>
                </Col>
            </Row>
        </section >
    )
}

export default Hero;