import React from 'react';
import './index.css'
import { Row, Container, Navbar, Nav, Col, Form } from 'react-bootstrap';
import { Instagram, Facebook } from 'react-bootstrap-icons';

function Footer() {
    return (
        <Container fluid className="footer__container d-flex mb-5 flex-lg-row flex-column">
            <Row xs={12} className="m-0 px-3">
                <Col className="px-0">
                    <h2 href="#home">Elean</h2>
                    <p className=" font-weight-bold"> <span>ТЕЛ.:</span> +7 (495) 150 - 14 - 77</p>
                    <p className=" font-weight-bold"> <span>WHATSAPP:</span> +7 (977) 728-27-38</p>
                    <p className=" font-weight-bold"> <span>EMAIL:</span>  info@eleanboutique.ru</p>
                </Col>
            </Row>
            <Row xs={12} className="m-0 px-3 flex-column">
                <Navbar as={Col} className="px-0">
                    <Nav className="w-100  d-flex flex-column flex-sm-row">
                        <Nav.Link className="pl-0 pl-lg-1" href="#features">Features</Nav.Link>
                        <Nav.Link className="pl-0 pl-lg-1" href="#pricing">Pricing</Nav.Link>
                        <Nav.Link className="pl-0 pl-lg-1" href="#features">Features</Nav.Link>
                        <Nav.Link className="pl-0 pl-lg-1" href="#pricing">Pricing</Nav.Link>
                        <Nav.Link className="pl-0 pl-lg-1" href="#pricing">Pricing</Nav.Link>
                        <Nav.Link className="pl-0 pl-lg-1" href="#features">Features</Nav.Link>

                    </Nav>
                </Navbar>
                <Col className="d-flex text-center align-items-start flex-xl-row flex-column px-0">
                    <p className=" font-weight-bold text-left"> <span className="d-block">АДРЕС: </span> г. Москва, Новая площадь 8, стр.2, 5 этаж</p>
                    <p className="pl-xl-5 pl-0 font-weight-bold text-left"> <span className="d-block">АДРЕС: </span> г. Москва, Новая площадь 8, стр.2, 5 этаж</p>
                </Col>
                <Col className="d-flex px-0">
                    <Nav.Link className="m-2 ml-3  d-md-flex" href="#home"><Instagram /></Nav.Link>
                    <Nav.Link className="m-2  d-md-flex" href="#home"><Facebook /></Nav.Link>
                </Col>
            </Row>
            <Row xs={12} className="flex-column m-0 px-3">
                <Form.Group className="p-0" as={Col} >
                    <Form.Control className="footer__input rounded-0" required type="name" placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="p-0" as={Col} >
                    <Form.Control className="footer__input rounded-0" required type="mail" placeholder="E-mail" />
                </Form.Group>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Я согласен с политикой конфиденциальности</label>
                </div>
                <Form.Group className="p-0 mt-3" as={Col} >
                    <Form.Control className="footer__input rounded-0" required type="text" placeholder="Subscribe" />
                </Form.Group>

            </Row>
        </Container>
    );
}

export default Footer;