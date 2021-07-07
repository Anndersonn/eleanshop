import React from 'react'
import { Container } from 'react-bootstrap'
import Navigation from '../components/main/navbar/navbar'
import MainPage from '../components/main/mainPage/mainPage'
import Categories from '../components/main/categories/categories'
import About from '../components/main/about/about'
import ShowRoom from '../components/main/showRoom/showRoom'
import ContactForm from '../components/main/form/form'

function Main() {
    return (
        <>
            <Container>
                <Navigation />
            </Container>
            <MainPage />
            <Container>
                <Categories />
            </Container>
            <About />
            <Container>
                <ShowRoom />
                <ContactForm />
            </Container>
        </>
    )
}

export default Main
