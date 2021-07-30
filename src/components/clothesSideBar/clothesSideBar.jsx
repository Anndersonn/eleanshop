import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { array } from '../helpers/navSideBar'

function ClothesSideBar() {

    const history = useHistory()

    return (
        <Container>
            <Row>
                <Nav as={Col} className="flex-column flex-lg-column justify-content-between">
                    {array.slice(0, 2).map(item =>
                        <div key={item.id}>
                            <Nav.Link >{item.categories}</Nav.Link>
                            {item.links && item.links.map(nav => <Nav.Link key={item.id} onClick={() => history.push(nav.path)} href={nav.hash}>{nav.link}</Nav.Link>)}
                        </div>
                    )}
                </Nav>
            </Row>
        </Container>
    );
}

export default ClothesSideBar;