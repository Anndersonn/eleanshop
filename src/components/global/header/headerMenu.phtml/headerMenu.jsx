import React from 'react'
import { Image, Nav, Navbar } from 'react-bootstrap'
import { Cart } from 'react-bootstrap-icons'
import { useHistory } from 'react-router-dom'
import LikeHeart from '../../../../assets/img/like.svg';

export default function HeaderMenu() {

    const history = useHistory()


    return (
        <>
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
        </>
    )
}
