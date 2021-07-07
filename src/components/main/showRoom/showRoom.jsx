import React from 'react';
import { Image, Col, Row } from 'react-bootstrap';
import photoRoom from '../../../img/showroom1.png'
import './index.css'

function ShowRoom() {
    return (
        <>
            <div className="text-center mb-5">
                <h3 className="card-title">НАШ ШОУРУМ</h3>
            </div>
            <Row md={12} className='mb-5'>
                <Col md={4} sm={12} className="p-0 pt-md-5"><Image className='w-100' src={photoRoom}></Image></Col>
                <Col md={4} sm={12} className="p-0 pt-md-3"><Image className='w-100' src={photoRoom}></Image></Col>
                <Col md={4} sm={12} className="p-0"><Image className='w-100' src={photoRoom}></Image></Col>
            </Row>
        </>
    );
}

export default ShowRoom;