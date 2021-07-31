import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { array } from '../../helpers/navSideBar'
import './index.css'

function ClothesSideBar() {

    const history = useHistory()

    return (
        <Row>
            <Nav as={Col} className="flex-column flex-lg-column justify-content-between">
                {array.slice(0, 2).map(item =>
                    <div className='d-flex flex-column align-items-start mt-3' key={item.id}>
                        <div className='font-weight-bold text-uppercase mb-3'>{item.categories}</div>
                        {item.links && item.links.map(nav => <Nav.Link className='nav__link px-0' key={item.id} onClick={() => history.push(nav.path)} href={nav.hash}>{nav.link}</Nav.Link>)}
                    </div>
                )}
            </Nav>
        </Row>
    );
}

export default ClothesSideBar;