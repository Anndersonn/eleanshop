import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import feedbackImage from '../../../img/feedback1.png'
import feedbackArrow from '../../../img/feedbackarrow.svg'
import './index.css'

function Feedback() {


    return (
        <div className="text-center pb-4 position-relative" id='feedback'>

            <h4 className="mb-5">ЗАПИСАТЬСЯ НА ПРИМЕРКУ В ШОУРУМЕ</h4>
            <Row xs={12} className='m-auto h-100 position-relative'>
                <Image className="right__arrow position-absolute " src={feedbackArrow} />
                <Image className="left__arrow position-absolute" src={feedbackArrow} />
                <Col xs={12} md={3} lg={2} className="mx-auto text-left p-0 d-md-block d-flex flex-column">
                    <Image rounded fluid src={feedbackImage} />
                    <div>Новинки</div>
                </Col>
                <Col md={3} lg={2} className=" mx-auto text-left p-0 d-none d-md-block">
                    <Image rounded fluid src={feedbackImage} />
                    <div>Новинки</div>
                </Col>
                <Col md={3} lg={2} className=" mx-auto text-left p-0 d-none d-md-block">
                    <Image rounded fluid src={feedbackImage} />
                    <div>Новинки</div>
                </Col>
                <Col lg={2} className=" mx-auto text-left p-0 d-none d-lg-block">
                    <Image rounded fluid src={feedbackImage} />
                    <div>Новинки</div>
                </Col>
                <Col lg={2} className=" mx-auto text-left p-0 d-none d-lg-block">
                    <Image rounded fluid src={feedbackImage} />
                    <div>Новинки</div>
                </Col>
            </Row>
            <div className="feedback__dots">
                <div></div>
                <div></div>
                <div></div>
                <div className="active__dot"></div>
                <div></div>
            </div>
        </div>
    );
}

export default Feedback;