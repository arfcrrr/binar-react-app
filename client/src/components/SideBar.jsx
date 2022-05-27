import { Form, Button } from 'react-bootstrap';

const SideBar = () => {
    return (
        <div>
            <div id="sidebar" className="sidebar d-flex flex-column">
                <a href="javascript:void(0)" className="closebtn" onclick="closeNav()"><img src="images/icon_close.svg"
                    alt="Icon Close"></img></a>
                <a href="#" className="fw-bold">BCR</a>
                <a href="#services">Our Services</a>
                <a href="#why-us">Why Us</a>
                <a href="#testimonial">Testimony</a>
                <a href="#faq">FAQ</a>
                <Form className="d-flex mx-4 mt-3">
                    <Button variant="success">Register</Button>
                </Form>
            </div>
            <div id="overlay"></div>
        </div>
    )
}

export default SideBar;