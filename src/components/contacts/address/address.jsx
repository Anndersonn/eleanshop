import React from "react";
import { Col, Row } from "react-bootstrap";
import FirmId from "../../../pages/contacts/firmId/firmId";
import AddressCredits from "../../main/footer/addressCredits/addressCredits";
import ContactCredits from "../../main/footer/contactCredits/contactCredits";
import ContactForm from "../../main/form/form";
import './index.css';




function Address() {
    return (
        <>
            <Row className="mb-5">
                <Col className='contact__page-address' xs={6}>
                    <ContactCredits />
                </Col>
                <Col className='contact__page-address' xs={6}>
                    <FirmId />
                </Col>
            </Row>
            <h3>АДРЕС И РЕЖИМ РАБОТЫ</h3>
            <AddressCredits />
            <ContactForm />
        </>
    );
}

export default Address;