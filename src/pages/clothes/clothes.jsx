import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navigation from '../../components/main/navbar/navbar';
import Footer from '../../components/main/footer/footer';
import ClothesSideBar from '../../components/clothesSideBar/clothesSideBar';

function Clothes({ match }) {


    const { id } = useParams()
    console.log(id)
    console.log(match)
    return (
        <Container>
            <Navigation />
            <div className='text-center'>
                <h3>{id}</h3>
            </div>
            <ClothesSideBar />

            <Footer />
        </Container>
    );
}

export default Clothes;