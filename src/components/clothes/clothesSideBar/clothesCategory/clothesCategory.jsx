import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

import Categories2 from '../../../../img/categories2.png';
import LikeHeart from '../../../../img/like.svg';
import './index.css'

function ClothesCategory() {


    return (
        <>
            <Container className='d-flex m-0 p-0'>
                <Row xs={6} style={{ height: 'fit-content' }} className='pr-3 m-0'>
                    {Array(9).fill(1).map((_, index) => (
                        <Col className='m-auto h-100 py-3 pr-5' md={4} key={index} >
                            <Image className='w-100' rounded fluid src={Categories2} />
                            <div className='info' >
                                <div className='desc d-flex '>
                                    <p className='font-weight-bold'>/ Классический комплект с смокингом и жилетом</p>
                                    <Image src={LikeHeart} />
                                </div>
                                <div className='secondary__info d-flex '>
                                    <div className="price font-weight-bold">65 300 ₽</div>
                                    <div className="speciality">Мировая классика</div>
                                </div>
                            </div>

                        </Col>
                    ))}
                </Row>

                <Row xs={2} className=' m-0 pr-3' style={{ width: 'inherit' }}>
                    <Col md={12} className='d-flex flex-column p-0 py-3'>
                        <Image className='h-100' style={{ objectFit: 'cover' }} rounded fluid src={Categories2} />
                        <div className='info'>
                            <div className='desc d-flex'>
                                <p className='font-weight-bold'>/ Классический комплект с смокингом и жилетом</p>
                                <Image src={LikeHeart} />
                            </div>
                            <div className='secondary__info d-flex'>
                                <div className="price font-weight-bold">65 300 ₽</div>
                                <div className="speciality">Мировая классика</div>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} className='d-flex flex-column p-0 py-3'>
                        <Image className='h-100' style={{ objectFit: 'cover' }} rounded fluid src={Categories2} />
                        <div className='info'>
                            <div className='desc d-flex'>
                                <p className='font-weight-bold'>/ Классический комплект с смокингом и жилетом</p>
                                <Image src={LikeHeart} />
                            </div>
                            <div className='secondary__info d-flex'>
                                <div className="price font-weight-bold">65 300 ₽</div>
                                <div className="speciality">Мировая классика</div>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container >

            <Container className='d-flex m-0 p-0 '>
                <Row xs={2} className=' m-0 pl-3' style={{ width: 'inherit' }}>
                    <Col md={12} className='d-flex flex-column py-3 p-0'>
                        <Image className='h-100' style={{ objectFit: 'cover' }} rounded fluid src={Categories2} />
                        <div className='info'>
                            <div className='desc d-flex'>
                                <p className='font-weight-bold'>/ Классический комплект с смокингом и жилетом</p>
                                <Image src={LikeHeart} />
                            </div>
                            <div className='secondary__info d-flex'>
                                <div className="price font-weight-bold">65 300 ₽</div>
                                <div className="speciality">Мировая классика</div>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} className='d-flex flex-column py-3 p-0'>
                        <Image className='h-100' style={{ objectFit: 'cover' }} rounded fluid src={Categories2} />
                        <div className='info'>
                            <div className='desc d-flex'>
                                <p className='font-weight-bold'>/ Классический комплект с смокингом и жилетом</p>
                                <Image src={LikeHeart} />
                            </div>
                            <div className='secondary__info d-flex'>
                                <div className="price font-weight-bold">65 300 ₽</div>
                                <div className="speciality">Мировая классика</div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row xs={8} style={{ height: 'fit-content' }} className='pl-3 m-0'>
                    {Array(9).fill(1).map((_, index) => (
                        <Col className=' h-100 py-3 pl-5' md={4} key={index} >
                            <Image className='w-100' rounded fluid src={Categories2} />
                            <div className='info'>
                                <div className='desc d-flex '>
                                    <p className="font-weight-bold">/ Классический комплект с смокингом и жилетом</p>
                                    <Image src={LikeHeart} />
                                </div>
                                <div className='secondary__info d-flex '>
                                    <div className="price font-weight-bold">65 300 ₽</div>
                                    <div className="speciality">Мировая классика</div>
                                </div>
                            </div>

                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default ClothesCategory;