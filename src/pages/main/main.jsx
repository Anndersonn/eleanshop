import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Navigation from '../../components/main/navbar/navbar'
import MainPage from '../../components/main/mainPage/mainPage'
import Categories from '../../components/main/categories/categories'
import About from '../../components/main/about/about'
import ShowRoom from '../../components/main/showRoom/showRoom'
import ContactForm from '../../components/main/form/form'
import Feedback from '../../components/main/feedback/feedback'
import Comments from '../../components/main/feedback/comments/comments'
import Socials from '../../components/main/socials/socials'
import Footer from '../../components/main/footer/footer'

import { sliderData } from '../../components/helpers/imgSlider'




function Main() {


    return (
        <>
            <Navigation />
            <MainPage sliderImg={sliderData} />
            <Container>
                <Categories />
            </Container>
            <About />
            <Container>
                <ShowRoom />
                <ContactForm />
                <Feedback />
                <Comments />
                <Socials />
            </Container>
            <Footer />
        </>
    )
}

export default Main
