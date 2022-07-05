import React, { useState } from 'react';
import './index.css'
import { Row, Col, Container, Nav } from 'react-bootstrap';
import { array } from '../../../../helpers/json/navSideBar'
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
                    <Nav as={Col} className="flex-column flex-lg-row justify-content-between pl-md-0 pl-3">
                        {array.map((item, index) =>
                            <div key={index} className='d-flex flex-column align-items-start'>
                                <button onClick={() => toggleCategory(index)} className={showNavbar[index] ? "toggle__nav position-relative h3 border-bottom p-0 pb-3" : "active position-relative h3 border-bottom p-0 pb-3"}>{item.categories}</button>
                                {item.links && item.links.map((nav, j) => showNavbar[index] ? <Link to={nav.path ? nav.path : ''} key={`${nav}_${nav.link}`} href={nav.hash}>{nav.link}</Link> : '')}
                            </div>
                        )}
                    </Nav>
                </Row>
            </Container>

        </div>
    );
}

export default Sidebar;