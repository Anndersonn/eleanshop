import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Cart, Heart, Instagram, Facebook } from 'react-bootstrap-icons'
import './index.css'
import Sidebar from '../../navSideBar/sidebar'
import { useHistory, useLocation } from 'react-router-dom'

function Navigation() {

    const [burger, setBurger] = useState(false)

    const history = useHistory()

    const location = useLocation()



    useEffect(() => {
        setBurger(!burger)
    }, [location.pathname])

    console.log(location.pathname)

    return (
        <Container>
            <Navbar expand="false" className={!burger ? "color__switch" : ""}>

                <button onClick={() => setBurger(!burger)} className={burger ? "burger px-0" : "burger close"}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
                <Nav.Link className="m-2 ml-3 d-none d-md-flex" href="#home"><Instagram /></Nav.Link>
                <Nav.Link className="m-2 d-none d-md-flex" href="#home"><Facebook /></Nav.Link>
                <Navbar.Brand className="m-auto d-flex align-items-center" onClick={() => history.push('/')}>Elean <p className="mt-2 font-weight-light">ЖЕНСКИЙ <span>СМОКИНГ</span> </p>
                </Navbar.Brand>
                <p className="mt-3 d-none d-lg-block font-weight-bold"> +7 (495) 150 - 14 - 77</p>
                <button><Heart className="ml-md-5" /></button>
                <Nav.Link><Cart className="ml-md-3" /></Nav.Link>
                <Nav className="nav__wrp w-100 d-none d-lg-flex" >
                    <Nav.Link className="navigation__links" href="#categories">НОВИНИКИ</Nav.Link>
                    <Nav.Link className="navigation__links" href="#categories">КАТЕГОРИИ</Nav.Link>
                    <Nav.Link className="navigation__links" href="#categories">НАШИ КОЛЛЕКЦИИ</Nav.Link>
                    <Nav.Link className="navigation__links" href="#categories">ПОКУПАТЕЛЯМ</Nav.Link>
                    <Nav.Link className="navigation__links" href="#blog">О БРЕНДЕ</Nav.Link>
                    <Nav.Link className="navigation__links" href="#showroom">ШОУРУМ</Nav.Link>
                    <Nav.Link className="navigation__links" href="#footer">КОНТАКТЫ</Nav.Link>
                </Nav>

            </Navbar>
            <Sidebar burger={burger} />
        </Container>
    )
}

export default Navigation
