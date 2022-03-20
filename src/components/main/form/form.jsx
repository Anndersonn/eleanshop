import { React, useRef } from 'react';
import formIcon from '../../../img/formIcon.svg'
import { Image, Row, Col, Form } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import './index.css'

function ContactForm() {

    const form = useRef();


    // библиотека emailjs для высылания формы на gmail. TODO: нужно будет переписать серверную часть для высылки меилов и отказаться от библиотеки

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('contact_service', 'contact_form', form.current, '1kM4blSRGrOHBlN-I')
            .then((result) => {
                console.log(result.text);
                alert('Thank you! Check your email.')
            }, (error) => {
                console.log(error.text);
            });
        form.current.reset()
    };


    return (
        <div className="text-center mb-5 p-5 form__wrp" id="contactform">
            <Image className="mb-5" src={formIcon} />
            <h4 className="mb-5 form-title">ЗАПИСАТЬСЯ НА ПРИМЕРКУ В ШОУРУМЕ</h4>
            <Form ref={form} onSubmit={sendEmail}>
                <Row md={12}>
                    <Form.Group className=" contact__input p-0 position-relative mx-auto" as={Col} lg={4} md={8} controlId="formGridEmail">
                        <Form.Control className="border-dark rounded-0 p-4" required name="name" type="name" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group className=" contact__input p-0 position-relative mx-auto" as={Col} lg={4} md={8} controlId="formGridPassword">
                        <Form.Control className="border-dark rounded-0 p-4" required name="phone" type="tel" placeholder="Phone" />
                    </Form.Group>
                    <Form.Group className=" contact__input p-0 position-relative mx-auto" as={Col} lg={4} md={8} >
                        <Form.Control className="border-dark rounded-0 p-4" required name="number" type="number" placeholder="Time" />
                    </Form.Group>

                </Row>
                <Row className="mb-5">

                    <Form.Group as={Col} lg={10} md={12} className="p-0  m-md-auto mb-2" >
                        <Form.Control className=" border-dark rounded-0" name="message" rows="4" as="textarea" style={{ resize: 'none' }} />
                    </Form.Group>
                    <Col lg={2} xs={5} className="mt-3 mt-lg-0 p-0 h-100 mx-auto">
                        <button type="submit" className="border border-dark py-2 p-md-4 w-100">Submit</button>
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