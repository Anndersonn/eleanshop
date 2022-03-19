import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

import Navigation from '../../global/navbar/navbar';
import Footer from '../../components/main/footer/footer';
import ClothesSideBar from '../../components/clothes/clothesSideBar/clothesSideBar';
import ClothesCategory from '../../components/clothes/clothesSideBar/clothesCategory/clothesCategory';

function Clothes() {


    const { id } = useParams()
    const [burger, setBurger] = useState(true)

    return (
        <Container>
            <Navigation burger={burger} setBurger={setBurger} />
            <div className='text-center my-5'>
                <h3>{id}</h3>
            </div>
            {burger ? 
            <Row xs={12}>

                <Col xs={2} className='flex-nowrap'>
                    <ClothesSideBar />
                </Col>
                <Col className='mb-5' xs={10}>
                    <ClothesCategory />
                </Col>
            </Row>
                : ''}
            <Footer />
        </Container>
    );
}

export default Clothes;