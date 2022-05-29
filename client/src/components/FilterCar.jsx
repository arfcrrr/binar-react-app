import { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

import CardCar from './CardCar';
import axios from 'axios';

const FilterCar = () => {
    const [dataCars, setDataCars] = useState([]);
    const [dataFilter, setDataFilter] = useState([]);
    const [formFilter, setFormFilter] = useState({});

    const handleChange = (e) => {
        const data = { ...formFilter };
        data[e.target.name] = e.target.value;

        setFormFilter(data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleFilterData();
        const data = [];
        
        const dateFormat = new Date(formFilter.availableAt);
        dateFormat.setHours(formFilter.availableTime);

        dataCars.forEach(car => {
            if (new Date(car.availableAt).getTime() >= dateFormat.getTime() && car.capacity === Number(formFilter.capacity)) {
                data.push({
                    id: car.id,
                    image: car.image,
                    model: car.model,
                    type: car.type,
                    rentPerDay: car.rentPerDay,
                    capacity: car.capacity,
                    transmission: car.transmission,
                    year: car.year,
                })
                setDataFilter(data)
            }
        })
        console.log('DATA CARS: ', dataCars);
        console.log('FORM FILTER: ', formFilter);
        console.log('DATA FILTER: ', dataFilter);
    }

    const handleFilterData = async () => {
        try {
            const data = await axios.get('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json')
            setDataCars(data.data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Container fluid>
            <Container className="container-filter">
                <Form onSubmit={handleSubmit} className="mx-5">
                    <Row className="d-flex flex-row justify-content-center">
                        <Col md="auto" className="filter mx-2">
                            <Form.Label>Tipe Driver</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option selected>Pilih Tipe Driver</option>
                                <option value="driver">Dengan Sopir</option>
                                <option value="nodriver">Tanpa Sopir (Lepas Kunci)</option>
                            </Form.Select>
                        </Col>
                        <Col md="auto" className="filter mx-2">
                            <Form.Label>Tanggal</Form.Label>
                            <Form.Control
                                type="date"
                                name="availableAt"
                                onChange={handleChange}
                                value={formFilter.availableAt} />
                        </Col>
                        <Col md="auto" className="filter mx-2">
                            <Form.Label>Waktu Jemput / Ambil</Form.Label>
                            <Form.Select name="availableTime" value={formFilter.availableTime} onChange={handleChange} aria-label="Default select example">
                                <option selected>Pilih Waktu</option>
                                <option value="8">08.00</option>
                                <option value="9">09.00</option>
                                <option value="10">10.00</option>
                                <option value="11">11.00</option>
                                <option value="12">12.00</option>
                            </Form.Select>
                        </Col>
                        <Col md="auto" className="filter mx-2">
                            <Form.Label>Jumlah Penumpang (Optional)</Form.Label>
                            <Form.Select name="capacity" value={formFilter.capacity} onChange={handleChange} aria-label="Default select example">
                                <option selected>Jumlah Penumpang</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </Form.Select>
                        </Col>
                        <Col className="filter">
                            <Button variant="bg-lime" type="submit" className="btn-auto bg-lime my-2 mb-4" id="load-btn">Cari Mobil</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>

            {/* Cars Result */}
            <Container className="d-flex flex-row justify-content-center flex-wrap mt-5" id="cars-container">
                {
                    dataFilter?.map(filterCar => (
                        <CardCar
                            key={filterCar.id}
                            image={filterCar.image}
                            model={filterCar.model}
                            type={filterCar.type}
                            rentPerDay={filterCar.rentPerDay}
                            capacity={filterCar.capacity}
                            transmission={filterCar.transmission}
                            year={filterCar.year}
                        />
                    )
                    )
                }
            </Container>
        </Container>
    )
}

export default FilterCar;