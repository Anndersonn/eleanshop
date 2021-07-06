import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Cart, Heart, Instagram, Facebook } from 'react-bootstrap-icons'
import './index.css'

function Navigation() {
    return (
        <Navbar expand="true">
            <button className="burger">
                <div></div>
                <div></div>
                <div></div>
            </button>
            <Nav.Link className="m-2 ml-3 d-none d-md-flex" href="#home"><Instagram /></Nav.Link>
            <Nav.Link className="m-2 d-none d-md-flex" href="#home"><Facebook /></Nav.Link>
            <Navbar.Brand className="m-auto d-flex align-items-center" href="#home">Elean <p className="mt-2 font-weight-light">ЖЕНСКИЙ <span>СМОКИНГ</span> </p>
            </Navbar.Brand>
            <p className="mt-3 d-none d-lg-block font-weight-bold"> +7 (495) 150 - 14 - 77</p>
            <button><Heart className="ml-md-5" /></button>
            <Nav.Link><Cart className="ml-md-3" /></Nav.Link>
            <Nav className="w-100 d-none d-lg-flex">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Navigation
