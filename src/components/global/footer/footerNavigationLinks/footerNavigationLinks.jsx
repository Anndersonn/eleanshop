import React from 'react'
import { Col, Nav, Navbar } from 'react-bootstrap'

export default function FooterNavigationLinks() {
    return (
        <Navbar as={Col} className="px-0">
            <Nav className="w-100  d-flex flex-column flex-sm-row">
                <Nav.Link className="pl-0 pl-lg-1" href="#features">ДОСТАВКА</Nav.Link>
                <Nav.Link className="pl-0 pl-lg-1" href="#pricing">ОПЛАТА</Nav.Link>
                <Nav.Link className="pl-0 pl-lg-1" href="#features">ВОЗВРАТ</Nav.Link>
                <Nav.Link className="pl-0 pl-lg-1" href="#pricing">РАЗМЕРНАЯ ТАБЛИЦА</Nav.Link>
                <Nav.Link className="pl-0 pl-lg-1" href="#pricing">ПРИМЕРКА</Nav.Link>
                <Nav.Link className="pl-0 pl-lg-1" href="#features">КОНТАКТЫ</Nav.Link>
            </Nav>
        </Navbar>
    )
}
