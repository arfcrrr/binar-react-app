import { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

import CardCar from './CardCar';
import axios from 'axios';

const FilterCar = () => {
    const [dataCars, setDataCars] = useState([]);
    const [formFilter, setFormFilter] = useState([]);

    const handleChange = (e) => {
        let data = { ...formFilter };
        data[e.target.name] = e.target.value;
        setFormFilter(data);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let data = [...dataCars]

        dataCars.forEach(car => {
            if (car.availableAt >= formFilter.availableAt && car.availableAt.getHour() == formFilter.availableAt && car.capacity == formFilter.capacity) {
                data.push({
                    image: dataCars.image,
                    model: dataCars.model,
                    type: dataCars.type,
                    rentPerDay: dataCars.rentPerDay,
                    capacity: dataCars.capacity,
                    transmission: dataCars.transmission,
                    year: dataCars.year,
                })
            }
        })
    }

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json')
            .then(res => {
                console.log(res)
                setDataCars(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    })


    return (
        <Container fluid>
            <Container className="container-filter">
                <Form onSubmit={handleSubmit} className="mx-5">
                    <Row className="d-flex flex-row justify-content-center">
                        <Col className="filter">
                            <Form.Label>Tipe Driver</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option selected>Pilih Tipe Driver</option>
                                <option value="driver">Dengan Sopir</option>
                                <option value="nodriver">Tanpa Sopir (Lepas Kunci)</option>
                            </Form.Select>
                        </Col>
                        <Col className="filter">
                            <Form.Label>Tanggal</Form.Label>
                            <Form.Control
                                type="date"
                                name="availableAt"
                                onChange={handleChange}
                                value={formFilter.availableAt} />
                        </Col>
                        <Col className="filter">
                            <Form.Label>Waktu Jemput / Ambil</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option selected>Pilih Waktu</option>
                                <option value="8">08.00</option>
                                <option value="9">09.00</option>
                                <option value="10">10.00</option>
                                <option value="11">11.00</option>
                                <option value="12">12.00</option>
                            </Form.Select>
                        </Col>
                        <Col className="filter">
                            <Form.Label>Jumlah Penumpang (Optional)</Form.Label>
                            <Form.Select aria-label="Default select example">
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
                    dataCars.map(dataCar => {
                        console.log('INI DATACARS: ', dataCars);
                        return (
                            <CardCar
                                image={dataCar.image}
                                model={dataCar.model}
                                type={dataCar.type}
                                rentPerDay={dataCar.rentPerDay}
                                capacity={dataCar.capacity}
                                transmission={dataCar.transmission}
                                year={dataCar.year}
                            />
                        )
                    })
                }
            </Container>
        </Container>
    )
}

export default FilterCar;