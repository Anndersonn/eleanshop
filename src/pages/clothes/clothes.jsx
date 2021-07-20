import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navigation from '../../components/main/navbar/navbar';

function Clothes() {
    const { id } = useParams()



    return (
        <Container>
            <Navigation />
            <div className='text-center'>
                <h3>{id}</h3>
                <h3>tetet</h3>
            </div>

        </Container>
    );
}

export default Clothes;