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

            {/* Cars Result */}
            <Container className="d-flex flex-row justify-content-center flex-wrap mt-5" id="cars-container"></Container>

            <Footer />
        </Container>
    )
}

export default Cars;