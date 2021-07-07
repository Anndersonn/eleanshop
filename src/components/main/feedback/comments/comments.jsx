import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import './index.css'

function Comments() {
    return (
        <>
            <Row className="flex-center ">
                <Col lg={6} md={10} className="d-flex mx-auto mt-5">
                    <Image src="#" width={40} height={40} roundedCircle className="bg-dark" />
                    <Col xs={10} className="m-auto">
                        <div className="comments__info d-flex">
                            <p>Kurwa ebana</p>
                            <p>mieszka w dupie</p>
                        </div>
                        <div className="comments__text p-3 w-100">Да, доставка заграницу осуществляется курьерской службой до двери. Доставка заграницу оплачивается при оформлении заказа, фиксированная стоимость 1 200₽.</div>
                    </Col>
                </Col>
                <Col lg={6} md={10} className="d-flex mx-auto mt-5">
                    <Image src="#" width={40} height={40} roundedCircle className="bg-dark" />
                    <Col xs={10} className="m-auto">
                        <div className="comments__info d-flex">
                            <p>Kurwa ebana</p>
                            <p>mieszka w dupie</p>
                        </div>
                        <div className="comments__text p-3 w-100">Да, доставка заграницу осуществляется курьерской службой до двери. Доставка заграницу оплачивается при оформлении заказа, фиксированная стоимость 1 200₽.</div>
                    </Col>
                </Col>
            </Row>
            <Row className="flex-center ">
                <Col lg={6} md={10} className="d-flex mx-auto mt-5">
                    <Image src="#" width={40} height={40} roundedCircle className="bg-dark" />
                    <Col xs={10} className="m-auto">
                        <div className="comments__info d-flex">
                            <p>Kurwa ebana</p>
                            <p>mieszka w dupie</p>
                        </div>
                        <div className="comments__text p-3 w-100">Да, доставка заграницу осуществляется курьерской службой до двери. Доставка заграницу оплачивается при оформлении заказа, фиксированная стоимость 1 200₽.</div>
                    </Col>
                </Col>
                <Col lg={6} md={10} className="d-flex mx-auto mt-5">
                    <Image src="#" width={40} height={40} roundedCircle className="bg-dark" />
                    <Col xs={10} className="m-auto">
                        <div className="comments__info d-flex">
                            <p>Kurwa ebana</p>
                            <p>mieszka w dupie</p>
                        </div>
                        <div className="comments__text p-3 w-100">Да, доставка заграницу осуществляется курьерской службой до двери. Доставка заграницу оплачивается при оформлении заказа, фиксированная стоимость 1 200₽.</div>
                    </Col>
                </Col>
            </Row>
        </>
    );
}

export default Comments;