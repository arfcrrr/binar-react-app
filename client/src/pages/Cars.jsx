import '../assets/css/style.css';

import { Container } from 'react-bootstrap';
import { NavigationBar, SideBar, Hero, FilterCar, Footer } from '../components';

const Cars = () => {
    return (
        <Container fluid className="p-0 m-0">
            <NavigationBar />
            <SideBar />
            <Hero />
            <FilterCar />

            <Footer />
        </Container>
    )
}

export default Cars;