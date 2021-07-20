import React, { useState, useLayoutEffect } from 'react';
import './index.css'
import { Row, Col, Container, Nav } from 'react-bootstrap';
import { array } from '../helpers/navSideBar'
import { useHistory, useLocation } from 'react-router-dom';


function Sidebar({ burger }) {

    const [showNavbar, setShownavbar] = useState({})



    const toggleComment = index => {
        setShownavbar(prevShowNavbar => ({
            ...prevShowNavbar,
            [index]: !prevShowNavbar[index]
        }));
    };

    const history = useHistory()



    return (
        <div className={!burger ? 'sidebar' : 'sidebar__active'}>
            <Container className="sidebar__container">
                <Row>
                    <Nav as={Col} className="flex-column flex-lg-row justify-content-between">
                        {array.map((item, index) =>
                            <div key={index}>
                                <Nav.Link onClick={() => toggleComment(index)} className={showNavbar[index] ? "toggle__nav position-relative h3 border-bottom" : "active position-relative h3 border-bottom"}>{item.categories}</Nav.Link>
                                {item.links && item.links.map((nav, j) => showNavbar[index] ? <Nav.Link onClick={() => history.push(nav.path)} key={j} href={nav.hash}>{nav.link}</Nav.Link> : '')}
                            </div>
                        )}
                    </Nav>
                </Row>
            </Container>

        </div>
    );
}

export default Sidebar;