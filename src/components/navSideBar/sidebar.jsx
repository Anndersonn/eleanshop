import React, { useState } from 'react';
import './index.css'
import { Row, Col, Container, Nav } from 'react-bootstrap';
import { array } from '../helpers/navSideBar'
import { Link } from 'react-router-dom';


function Sidebar() {

    const [showNavbar, setShownavbar] = useState(false)


    const toggleCategory = index => {
        setShownavbar(prevShowNavbar => ({
            ...prevShowNavbar,
            [index]: !prevShowNavbar[index]
        }));
    };

    return (
        <div className='sidebar'>
            <Container className="sidebar__container">
                <Row>
                    <Nav as={Col} className="flex-column flex-lg-row justify-content-between">
                        {array.map((item, index) =>
                            <div key={index} className='d-flex flex-column'>
                                <Nav.Link onClick={() => toggleCategory(index)} className={showNavbar[index] ? "toggle__nav position-relative h3 border-bottom" : "active position-relative h3 border-bottom"}>{item.categories}</Nav.Link>
                                {item.links && item.links.map((nav, j) => showNavbar[index] ? <Link to={nav.path && nav.path} key={`${nav}_${nav.link}`} href={nav.hash}>{nav.link}</Link> : '')}
                            </div>
                        )}
                    </Nav>
                </Row>
            </Container>

        </div>
    );
}

export default Sidebar;