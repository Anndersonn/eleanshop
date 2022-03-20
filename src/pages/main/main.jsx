import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Navigation from '../../global/navbar/navbar'
import MainPage from '../../components/main/banner/banner'
import Categories from '../../components/main/categories/categories'
import About from '../../components/main/about/about'
import ShowRoomSection from '../../components/main/showRoomSection/showRoomSection'
import ContactForm from '../../components/main/form/form'
import Feedback from '../../components/main/feedback/feedback'
import Comments from '../../components/main/feedback/comments/comments'
import Socials from '../../components/main/socials/socials'
import Footer from '../../components/main/footer/footer'

import { sliderData } from '../../components/helpers/imgSlider'



function Main() {

    const [burger, setBurger] = useState(true)



    return (
        <>
            <Navigation burger={burger} setBurger={setBurger} />
            {burger ?
                <>
                    <MainPage sliderImg={sliderData} />
                    <Container>
                        <Categories />
                    </Container>
                    <About />
                    <Container>
                        <ShowRoomSection />
                        <ContactForm />
                        <Feedback />
                        <Comments />
                        <Socials />
                    </Container>
                    <Footer />
                </> : ''
            }

        </>
    )
}

export default Main
