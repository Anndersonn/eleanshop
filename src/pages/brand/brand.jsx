import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../../components/global/footer/footer'
import Navigation from '../../components/global/header/header'
import Youtube from '../../components/pages/brandPage/youtube/youtube'
import { navigationContext } from '../../context/navigationContext'

export default function Brand() {

    const { burger } = useContext(navigationContext)
    return (
        <div>
            <Navigation />
            <div className='text-center my-5'>
                <h3>Бренд</h3>
            </div>
            {burger ?
                <>
                    <Container className='contacts__container d-flex mb-5'>
                        <Youtube />

                    </Container>
                    <Footer />
                </>
                : ''}
        </div>
    )
}
