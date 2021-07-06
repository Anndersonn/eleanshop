import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import Categories1 from '../../../img/categories1.png';
import './index.css';

function Categories() {
    return (
        <>
            <div className="categories__container">
                <Row md={5}>
                    <Col md={12}>
                        <div>Новинки</div>
                        <Image fluid src={Categories1} /></Col>
                    <Col md={6}>
                        <div>Новинки</div>
                        <Image fluid src={Categories1} /></Col>
                    <Col md={6}>
                        <div>Новинки</div>
                        <Image fluid src={Categories1} /></Col>
                </Row>
                <Row md={5}>
                    <Col md={6}>
                        <div>Новинки</div>
                        <Image fluid src={Categories1} /></Col>
                    <Col md={6}>
                        <div>Новинки</div>
                        <Image fluid src={Categories1} /></Col>
                    <Col md={12}>
                        <div>Новинки</div>
                        <Image fluid src={Categories1} /></Col>
                </Row>
            </div>

            <Row md={12}>
                <Col>
                    <div>Новинки</div>
                    <Image fluid src={Categories1} /></Col>
                <Col>
                    <div>Новинки</div>
                    <Image fluid src={Categories1} /></Col>
                <Col>
                    <div>Новинки</div>
                    <Image fluid src={Categories1} /></Col>
                <Col>
                    <div>Новинки</div>
                    <Image fluid src={Categories1} /></Col>
            </Row>
        </>
    );
}

export default Categories;