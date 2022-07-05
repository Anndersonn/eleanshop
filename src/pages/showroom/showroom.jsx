import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Footer from '../../components/global/footer/footer';
import Navigation from '../../components/global/header/header';
import ContactForm from '../../components/common/form/form';
import ShowRoomSection from '../../components/common/showroom/showroom';

function ShowRoom() {
    const [burger, setBurger] = useState(true)

    return (
        <Container className='showroom__page'>
            <Navigation burger={burger} setBurger={setBurger} />
            <Container>
                <ShowRoomSection />
                <ContactForm />
                <Footer />
            </Container>
        </Container>
    );
}

export default ShowRoom;