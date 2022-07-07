import React, { useContext, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Address from '../../components/pages/contactPage/address/address';
import Map from '../../components/pages/contactPage/map/googleMap';
import Footer from '../../components/global/footer/footer';
import Navigation from '../../components/global/header/header';
import { navigationContext } from '../../context/navigationContext';


function Contacts() {

    const { burger } = useContext(navigationContext)
    return (
        <>
            <Navigation />
            <div className='text-center my-5'>
                <h3>Контакты</h3>
            </div>
            {burger ?
                <>
                    <Container className='contacts__container d-flex mb-5'>
                        <Col xs={6}>
                            <Map />
                        </Col>
                        <Col xs={6}>
                            <Address />
                        </Col>
                    </Container>
                    <Footer />
                </>
                : ''}
        </>
    );
}

export default Contacts;