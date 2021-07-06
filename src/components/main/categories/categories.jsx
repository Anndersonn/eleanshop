import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import Categories1 from '../../../img/categories1.png';
import './index.css';

function Categories() {
    return (
        <>
            <div className=" categories__container d-md-flex mb-sm-1">
                <Row sm={12} md={5} >
                    <Col sm={12} md={12} className="mb-5">
                        <div>Новинки</div>
                        <Image rounded fluid src={Categories1} /></Col>
                    <Col sm={12} md={6} className="mb-5">
                        <div>Новинки</div>
                        <Image rounded fluid src={Categories1} /></Col>
                    <Col sm={12} md={6} className="mb-5">
                        <div>Новинки</div>
                        <Image rounded fluid src={Categories1} /></Col>
                </Row>
                <Row sm={12} md={5}>
                    <Col sm={12} md={6} className="mb-5">
                        <div>Новинки</div>
                        <Image rounded fluid src={Categories1} /></Col>
                    <Col sm={12} md={6} className="mb-5">
                        <div>Новинки</div>
                        <Image rounded fluid src={Categories1} /></Col>
                    <Col sm={12} md={12} className="mb-5">
                        <div>Новинки</div>
                        <Image rounded fluid src={Categories1} /></Col>
                </Row>
            </div>

            <Row md={12}>
                <Col sm={12} md={3} className="mb-5">
                    <div>Новинки</div>
                    <Image rounded fluid src={Categories1} /></Col>
                <Col sm={12} md={3} className="mb-5">
                    <div>Новинки</div>
                    <Image rounded fluid src={Categories1} /></Col>
                <Col sm={12} md={3} className="mb-5">
                    <div>Новинки</div>
                    <Image rounded fluid src={Categories1} /></Col>
                <Col sm={12} md={3} className="mb-5">
                    <div>Новинки</div>
                    <Image rounded fluid src={Categories1} /></Col>
            </Row>
        </>
    );
}

export default Categories;