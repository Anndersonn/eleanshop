import React from 'react'
import { Container } from 'react-bootstrap'
import Navigation from '../components/main/navbar/navbar'
import MainPage from '../components/main/mainPage/mainPage'

function Main() {
    return (
        <>
            <Container>
                <Navigation />
            </Container>
            <MainPage />
        </>
    )
}

export default Main
