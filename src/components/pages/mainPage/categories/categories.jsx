import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import Categories1 from '../../../../assets/img/categories1.png';
import './index.css';

function Categories() {
    return (
        <>
            <div className=" categories__container d-md-flex  mb-sm-1" id="categories">
                <Row sm={12}  >
                    <Col xs={12} className="mb-5">
                        <div>Новинки</div>
                        <Image rounded fluid src={Categories1} /></Col>
                    <Col xs={6} className="mb-5">
                        <div>Новинки</div>
                        <Image rounded fluid src={Categories1} /></Col>
                    <Col xs={6} className="mb-5">
                        <div>Новинки</div>
                        <Image rounded fluid src={Categories1} /></Col>
                </Row>
                <Row sm={12} >
                    <Col xs={6} className="mb-5">
                        <div>Новинки</div>
                        <Image rounded fluid src={Categories1} /></Col>
                    <Col xs={6} className="mb-5">
                        <div>Новинки</div>
                        <Image rounded fluid src={Categories1} /></Col>
                    <Col xs={12} className="mb-5">
                        <div>Новинки</div>
                        <Image rounded fluid src={Categories1} /></Col>
                </Row>
            </div>

            <Row md={12}>
                {Array(4).fill(1).map((_, index) => (
                    <Col key={index} xs={6} md={3} className="mb-5">
                        <div>Новинки</div>
                        <Image rounded fluid src={Categories1} />
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default Categories;