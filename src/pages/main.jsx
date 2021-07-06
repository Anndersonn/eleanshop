import React from 'react'
import { Container } from 'react-bootstrap'
import Navigation from '../components/main/navbar/navbar'
import MainPage from '../components/main/mainPage/mainPage'
import Categories from '../components/main/categories/categories'
import About from '../components/main/about/about'

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
        </>
    )
}

export default Main
