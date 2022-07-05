import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Navigation from '../../components/global/header/header'
import Banner from '../../components/pages/mainPage/banner/banner'
import Categories from '../../components/pages/mainPage/categories/categories'
import About from '../../components/common/about/about'
import ShowRoomSection from '../../components/common/showroom/showroom'
import ContactForm from '../../components/common/form/form'
import Feedback from '../../components/common/feedback/feedback'
import Comments from '../../components/common/comments/comments'
import Socials from '../../components/global/socials/socials'
import Footer from '../../components/global/footer/footer'
import { sliderData } from '../../helpers/json/imgSlider'




function Main() {

    const [burger, setBurger] = useState(true)



    return (
        <>
            <Navigation burger={burger} setBurger={setBurger} />
            {burger ?
                <>
                    <Banner sliderImg={sliderData} />
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
