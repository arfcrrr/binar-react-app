import React, { Component } from 'react';
import { Carousel, Card, Row, Col } from 'react-bootstrap';
import IconStar from '../assets/images/icon_star.svg';
import ButtonLeft from '../assets/images/left_button.svg';
import ButtonRight from '../assets/images/right_button.svg';


class CarouselMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 1,  //index which u want to display first
            direction: null, //direction of the carousel..u need to set it to either 'next' or 'prev' based on user click
            nextIcon: <span className="me-5"><img src={ButtonRight} /></span>,
            prevIcon: <span className="ms-5"><img src={ButtonLeft} /></span>
        }
    }

    handleSelect = (selectedIndex, e) => {
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }

    render() {
        const { nextIcon, prevIcon } = this.state;
        return (
            <Carousel nextIcon={nextIcon} prevIcon={prevIcon} index={this.state.index} direction={this.state.direction} onSelect={this.handleSelect} variant="dark" className="p-4">
                <Carousel.Item>
                    <Card className="card-testimonial bg-lightblue">
                        <Card.Body className="text-wrap">
                            <Row>
                                <Col md="auto" className="mx-3">
                                    <img src={require("../assets/images/img_photo_1.png")} alt="Profile Photo"
                                        className="rounded-circle d-flex flex-row"></img>
                                </Col>
                                <Col>
                                    <div className="stars d-flex flex-row my-2">
                                        <img src={IconStar} />
                                        <img src={IconStar} />
                                        <img src={IconStar} />
                                        <img src={IconStar} />
                                        <img src={IconStar} />
                                    </div>
                                    <Card.Text>
                                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                                    </Card.Text>
                                    <Card.Text className="fw-bold">John Dee 32, Bromo</Card.Text>
                                </Col>
                            </Row>

                        </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card className="card-testimonial bg-lightblue" style={{ width: '640px' }}>
                        <Card.Body className="text-wrap">
                            <Row>
                                <Col md="auto" className="mx-3">
                                    <img src={require("../assets/images/img_photo_2.png")} alt="Profile Photo"
                                        className="rounded-circle d-flex flex-row"></img>
                                </Col>
                                <Col>
                                    <div className="stars d-flex flex-row my-2">
                                        <img src={IconStar} />
                                        <img src={IconStar} />
                                        <img src={IconStar} />
                                        <img src={IconStar} />
                                        <img src={IconStar} />
                                    </div>
                                    <Card.Text>
                                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                                    </Card.Text>
                                    <Card.Text className="fw-bold">John Dee 32, Bromo</Card.Text>
                                </Col>
                            </Row>

                        </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card className="card-testimonial bg-lightblue" style={{ width: '640px' }}>
                        <Card.Body className="text-wrap">
                            <Row>
                                <Col md="auto" className="mx-3">
                                    <img src={require("../assets/images/img_photo_3.png")} alt="Profile Photo"
                                        className="rounded-circle d-flex flex-row"></img>
                                </Col>
                                <Col>
                                    <div className="stars d-flex flex-row my-2">
                                        <img src={IconStar} />
                                        <img src={IconStar} />
                                        <img src={IconStar} />
                                        <img src={IconStar} />
                                        <img src={IconStar} />
                                    </div>
                                    <Card.Text>
                                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                                    </Card.Text>
                                    <Card.Text className="fw-bold">John Dee 32, Bromo</Card.Text>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
            </Carousel>
        )
    }
}
export default CarouselMain;