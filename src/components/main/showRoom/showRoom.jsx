import React from 'react';
import { Image, Col, Row } from 'react-bootstrap';
import photoRoom from '../../../img/showroom1.png'
import './index.css'

function ShowRoom() {
    return (
        <>
            <div className="text-center mb-5" id='showroom'>
                <h3 className="card-title">НАШ ШОУРУМ</h3>
            </div>
            <Row md={12} className='mb-5 flex-nowrap'>
                <Col md={4} sm={12} className="p-0 pt-md-5 w-100"><Image className='w-100' src={photoRoom}></Image></Col>
                <Col md={4} sm={12} className="p-0 pt-md-3 w-100"><Image className='w-100' src={photoRoom}></Image></Col>
                <Col md={4} sm={12} className="p-0 w-100"><Image className='w-100' src={photoRoom}></Image></Col>
            </Row>
        </>
    );
}

export default ShowRoom;