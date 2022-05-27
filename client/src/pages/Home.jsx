import '../assets/css/style.css';

import { NavigationBar, SideBar, Hero, Services, WhyUs, Testimonial, Jumbotron, Faq, Footer } from '../components';

import { Container } from 'react-bootstrap';

const Home = () => {
    return (
        <Container fluid className="p-0 m-0">
            <NavigationBar />
            <SideBar />
            <Hero />
            <Services />
            <WhyUs />
            <Testimonial />
            <Jumbotron />
            <Faq />
            <Footer />
        </Container>
    )
}

export default Home;