import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Address from '../../components/contacts/address/address';
import Map from '../../components/contacts/map/googleMap';
import Footer from '../../components/main/footer/footer';
import Navigation from '../../global/navbar/navbar';


function Contacts() {

    const [burger, setBurger] = useState(true)

    return (
        <>
            <Navigation burger={burger} setBurger={setBurger} />
            <div className='text-center my-5'>
                <h3>Контакты</h3>
            </div>
            <Container className='d-flex'>
                <Col xs={6}>
                    <Map />
                </Col>
                <Col xs={6}>
                    <Address />
                </Col>
            </Container>
            <Footer />
        </>
    );
}

export default Contacts;