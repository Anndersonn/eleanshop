import React from 'react';
import formIcon from '../../../img/formIcon.svg'
import { Image, Row, Col, Form } from 'react-bootstrap';
import './index.css'

function ContactForm() {
    return (
        <div className="text-center mb-3 p-5 form__wrp">
            <Image className="mb-5" src={formIcon} />
            <h4 className="mb-5">ЗАПИСАТЬСЯ НА ПРИМЕРКУ В ШОУРУМЕ</h4>
            <Form>
                <Row md={12}>
                    <Form.Group className=" contact__input p-0 position-relative mx-auto" as={Col} lg={4} md={8} controlId="formGridEmail">
                        <Form.Control className="border-dark rounded-0 p-4" required type="name" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group className=" contact__input p-0 position-relative mx-auto" as={Col} lg={4} md={8} controlId="formGridPassword">
                        <Form.Control className="border-dark rounded-0 p-4" required type="tel" placeholder="Phone" />
                    </Form.Group>
                    <Form.Group className=" contact__input p-0 position-relative mx-auto" as={Col} lg={4} md={8} >
                        <Form.Control className="border-dark rounded-0 p-4" required type="number" placeholder="Time" />
                    </Form.Group>

                </Row>
                <Row className="mb-5">

                    <Form.Group as={Col} lg={10} md={12} className="p-0 text__area m-md-auto mb-2">
                        <Form.Control className=" border-dark rounded-0 " rows="4" as="textarea" />
                    </Form.Group>
                    <Col lg={2} xs={3} className="mt-3 mt-lg-0 p-0 h-100 mx-auto">
                        <button type="submit" className="border border-dark p-4 w-100">Submit</button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="mr-auto text-left text-secondary">
                        <p>Поля отмеченные “*” обязательны для заполнения</p>
                    </Col>
                </Row>
            </Form>
        </div >
    );
}

export default ContactForm;