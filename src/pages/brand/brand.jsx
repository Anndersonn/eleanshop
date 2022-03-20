import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Footer from '../../components/main/footer/footer';
import ContactForm from '../../components/main/form/form';
import ShowRoomSection from '../../components/main/showRoomSection/showRoomSection';
import Navigation from '../../global/navbar/navbar';

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