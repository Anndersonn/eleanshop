import React from 'react';
import aboutPhoto from '../../../img/about.png'
import vector from '../../../img/vector.png'
import vector2 from '../../../img/vector2.png'
import { Row, Col, Image, Container } from 'react-bootstrap';
import './index.css'

function About() {
    return (
        <Container fluid>
            <div className="text-center mb-5">
                <h4 className="card-title ">О БРЕНДЕ</h4>
            </div>
            <Row className="position-relative p-3 mb-5">
                <Col lg={6} sm={12}>
                    <Image src={aboutPhoto} className="about__photo" />
                    <Image className="vector position-absolute" src={vector} />
                    <Image className="vector2 position-absolute" src={vector2} />
                </Col>
                <Col lg={4} sm={11} className="d-flex card-text justify-content-center align-items-center flex-column  mr-auto">
                    <div>
                        <p className="text-card p-3">
                            Сегодня ELEAN - это первый в России магазин готового женского смокинга. У нас каждая женщина может подобрать для себя образ со смокингом, такой же как у голливудских див и звезд светской хроники.

                            Костюм со смокингом ELEAN - выбор звёзд эстрады и кино, телеведущих, fashion-стилистов, успешных женщин-руководителей, представительниц научной и деловой элиты.

                            История бренда началась задолго до первого показа, который состоялся 12 марта 2016 года, с мечты автора коллекции, Елены Писаревой о собственном бренде элегантной одежды и продолжалась долгие 30 лет накопления профессионального опыта. Вся первая коллекция была выполнена из 100% натурального шелка, в нее вошли жентсвенные платья и костюмы.
                        </p>
                        <button className="about__btn">Подробнее</button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default About;