import React from 'react';
import './index.css'
import { Row, Col, Image } from 'react-bootstrap';
import instaImage from '../../../img/insta1.png'
import insta from '../../../img/insta2.png'

function Socials() {
    return (
        <div className="text-center mb-5" id="socials">
            <h3 className=" mb-4">МЫ В INSTAGRAM</h3>
            <Row xs={12} className='m-auto h-100 position-relative'>
                <Col xs={12} md={3} lg={2} className="mx-auto text-left p-0 d-md-block d-flex flex-column">
                    <Image rounded fluid src={instaImage} />
                    <Image rounded fluid src={insta} />
                </Col>
                <Col md={3} lg={2} className=" mx-auto text-left p-0 d-none d-md-block">
                    <Image rounded fluid src={instaImage} />
                    <Image rounded fluid src={insta} />
                </Col>
                <Col md={3} lg={2} className=" mx-auto text-left p-0 d-none d-md-block">
                    <Image rounded fluid src={instaImage} />
                    <Image rounded fluid src={insta} />
                </Col>
                <Col lg={2} className=" mx-auto text-left p-0 d-none d-lg-block">
                    <Image rounded fluid src={instaImage} />
                    <Image rounded fluid src={insta} />
                </Col>
                <Col lg={2} className=" mx-auto text-left p-0 d-none d-lg-block">
                    <Image rounded fluid src={instaImage} />
                    <Image rounded fluid src={insta} />
                </Col>
            </Row>
        </div>
    );
}

export default Socials;