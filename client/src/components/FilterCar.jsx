import { Container, Row, Col, Button } from 'react-bootstrap';

const FilterCar = () => {
    return (
        <Container className="container-filter">
            <Row className="d-flex flex-row justify-content-center">
                <Col className="filter">
                    <label for="driver">Tipe Driver</label>
                    <select id="driver-type" name="driver-type" class="form-select" aria-label="Default select example">
                        <option selected>Pilih Tipe Driver</option>
                        <option value="driver">Dengan Sopir</option>
                        <option value="nodriver">Tanpa Sopir (Lepas Kunci)</option>
                    </select>
                </Col>
                <Col className="filter">
                    <label for="tanggal">Tanggal</label>
                    <input type="date" name="date" id="date" class="form-control" data-date placeholder="Pilih Tanggal"></input>
                </Col>
                <Col className="filter">
                    <label for="waktu">Waktu Jemput / Ambil</label>
                    <select id="time" name="time" class="form-select" data-time aria-label="Default select example">
                        <option selected>Pilih Waktu</option>
                        <option value="8">08.00</option>
                        <option value="9">09.00</option>
                        <option value="10">10.00</option>
                        <option value="11">11.00</option>
                        <option value="12">12.00</option>
                    </select>
                </Col>
                <Col className="filter">
                    <label for="jumlah-penumpang">Jumlah Penumpang (Optional)</label>
                    <select id="capacity" name="capacity" class="form-select" data-capacity
                        aria-label="Default select example">
                        <option selected>Jumlah Penumpang</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </Col>
                <Col className="filter">
                    <Button variant="bg-lime" type="submit" className="btn-auto bg-lime my-2 mb-4" id="load-btn">Cari Mobil</Button>
                </Col>

            </Row>
        </Container>
    )
}

export default FilterCar;