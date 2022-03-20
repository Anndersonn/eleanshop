import React, { useEffect } from 'react'
import { Navbar, Nav, Container, Image } from 'react-bootstrap'
import { Cart, Instagram, Facebook } from 'react-bootstrap-icons'
import Sidebar from './navSideBar/sidebar'
import { useHistory, useLocation } from 'react-router-dom'
import LikeHeart from '../../img/like.svg';
import './index.css'

function Navigation({ burger, setBurger }) {

    const history = useHistory()
    const location = useLocation()
    useEffect(() => {
        return !burger ? setBurger(!burger) : setBurger(burger)
    }, [location.pathname])

    return (
        <Container>
            {
                !burger ? (
                    <>
                        <Sidebar />
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
                            <button><Image src={LikeHeart} className="ml-md-5" /></button>
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
                    </>
                ) :
                    (
                        <Navbar expand="false" className={!burger ? "color__switch" : ""}>

                            <button onClick={() => setBurger(!burger)} className={burger ? "burger px-0" : "burger close"}>
                                <div></div>
                                <div></div>
                                <div></div>
                            </button>
                            <Nav.Link className="m-2 ml-3 d-none d-md-flex" href="#home"><Instagram /></Nav.Link>
                            <Nav.Link className="m-2 d-none d-md-flex" href="#home"><Facebook /></Nav.Link>
                            <Nav.Link className="m-auto d-flex align-items-center navbar-brand" onClick={() => history.push('/')}>Elean <p className="mt-2 font-weight-light">ЖЕНСКИЙ <span>СМОКИНГ</span> </p>
                            </Nav.Link>
                            <p className="mt-3 d-none d-lg-block font-weight-bold"> +7 (495) 150 - 14 - 77</p>
                            <button><Image src={LikeHeart} className="ml-md-5" /></button>
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
                    )
            }
        </Container >
    )
}

export default Navigation
