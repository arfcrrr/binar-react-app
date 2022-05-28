import { Card } from 'react-bootstrap';
import IconUser from '../assets/images/icon_users.svg';
import IconSettings from '../assets/images/icon_settings.svg';
import IconCalendar from '../assets/images/icon_calendar.svg';

const CardCar = ({image, model, type, rentPerDay, capacity, transmission, year}) => {
    return (
        <Card className="m-4" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body className="d-flex flex-column">
                <Card.Text>
                    {model} / {type}
                </Card.Text>
                <Card.Title className="fw-bold">Rp {rentPerDay} / hari</Card.Title>
                <div className="text-icon pb-2 d-flex flex-row">
                    <img src={IconUser}/>
                    <p className="ms-2 my-0" id="capacity">{capacity} orang</p>
                </div>
                <div className="text-icon pb-2 d-flex flex-row">
                    <img src={IconSettings}/>
                    <p className="ms-2 my-0" id="capacity">{transmission}</p>
                </div>
                <div className="text-icon pb-2 d-flex flex-row">
                    <img src={IconCalendar}/>
                    <p className="ms-2 my-0" id="capacity">Tahun {year}</p>
                </div>
                <a href="#" className="btn bg-lime mt-4">Pilih Mobil</a>
            </Card.Body>
        </Card>
    )
}

export default CardCar;