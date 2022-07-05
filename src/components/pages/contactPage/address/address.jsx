import React from "react";
import { Col, Row } from "react-bootstrap";
import FirmId from "./firmId/firmId";
import './index.css';
import AddressCredits from "../../../global/footer/addressCredits/addressCredits";
import ContactCredits from "../../../global/footer/contactCredits/contactCredits";
import ContactForm from "../../../common/form/form";




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
            <h3 className="working__info-subtitle">АДРЕС И РЕЖИМ РАБОТЫ</h3>
            <AddressCredits />
            <ContactForm />
        </>
    );
}

export default Address;