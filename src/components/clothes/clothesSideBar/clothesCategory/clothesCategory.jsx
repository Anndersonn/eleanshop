import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

import Categories2 from '../../../../img/categories2.png';
import LikeHeart from '../../../../img/like.svg';
import './index.css'
import axios from 'axios';




function ClothesCategory() {

    const [state, setState] = useState([])


    const [currentPage, setCurrentPage] = useState(1)

    const [pageNumberLimit, setPageNumberLimit] = useState(4)
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(4);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);



    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos').then(res => setState(res.data))
    }, [])


    const handlePage = (event) => {
        setCurrentPage(Number(event.target.id))
    }


    const handleNext = () => {
        setCurrentPage(currentPage + 1)

        if (currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    }

    const handlePrev = () => {
        setCurrentPage(currentPage - 1);

        if ((currentPage - 1) % pageNumberLimit == 0) {
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };
    return (
        <>
            <Container>
                <Container className='d-flex m-0 p-0'>
                    <Row xs={6} style={{ height: 'fit-content' }} className='pr-3 m-0'>
                        {state.slice(0, 9).map(item => {
                            return (
                                <Col className=' h-100 py-3 pl-5' md={4} >

                                    <Image className='w-100' rounded fluid src={item.url} />
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
                            )
                        })}
                    </Row>

                    <Row xs={2} className=' m-0 pr-3' style={{ width: 'inherit' }}>
                        {state.slice(0, 2).map(item => {
                            return (
                                <Col md={12} className='d-flex flex-column p-0 py-3'>

                                    <Image className='h-100' style={{ objectFit: 'cover' }} rounded fluid src={item.url} />
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

                            )
                        })}


                    </Row>

                </Container >

                <Container className='d-flex m-0 p-0 '>
                    <Row xs={2} className=' m-0 pl-3' style={{ width: 'inherit' }}>
                        {state.slice(0, 2).map(item => {
                            return (
                                <Col md={12} className='d-flex flex-column py-3 p-0'>

                                    <Image className='h-100' style={{ objectFit: 'cover' }} rounded fluid src={item.url} />
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

                            )
                        })}
                    </Row>
                    <Row xs={8} style={{ height: 'fit-content' }} className='pl-3 m-0'>
                        {state.slice(0, 9).map(item => {
                            return (
                                <Col className=' h-100 py-3 pl-5' md={4} >

                                    <Image className='w-100' rounded fluid src={item.url} />
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
                            )
                        })}
                    </Row>
                </Container>

            </Container>

            <ul className='pagination__container d-flex justify-content-center'>
                <button onClick={handlePrev} disabled={currentPage === 1 ? true : false}>Prev</button>

                {state.map(({ id }) => {
                    return id < maxPageNumberLimit + 1 && id > minPageNumberLimit ? (
                        <li className={currentPage === id ? 'active p-2 border m-1 my-5' : 'p-2 border m-1 my-5'} onClick={handlePage} id={id} key={id}>{id}</li>
                    ) : null
                })}
                <button onClick={handleNext} disabled={currentPage >= state.length - 1 ? true : false}>Next</button>

            </ul>

        </>
    );
}

export default ClothesCategory;