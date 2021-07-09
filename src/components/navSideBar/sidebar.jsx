import React, { useState } from 'react';
import './index.css'
import { Row, Col, Container, Nav } from 'react-bootstrap';


const array = [
    {
        categories: 'Категории',
        links: [
            {
                link: 'Смокинг'
            },
            {
                link: 'Костюмы'
            }
        ],
    },

    {
        categories: 'Коллекции',
        links: [
            {
                link: 'Смокинг'
            },
            {
                link: 'Костюмы'
            }
        ],

    },
    {
        categories: 'Коллекции',
        links: [
            {
                link: 'Смокинг'
            },
            {
                link: 'Костюмы'
            }
        ],

    },
    {
        categories: 'Коллекции',
        links: [
            {
                link: 'Смокинг'
            },
            {
                link: 'Костюмы'
            }
        ],

    },
    {
        categories: 'Коллекции',
        links: [
            {
                link: 'Смокинг'
            },
            {
                link: 'Костюмы'
            }
        ],

    },


];




function Sidebar({ burger }) {

    const [showNavbar, setShownavbar] = useState({})

    const toggleComment = index => {
        setShownavbar(prevShowNavbar => ({
            ...prevShowNavbar,
            [index]: !prevShowNavbar[index]
        }));
    };


    return (
        <div className={!burger ? 'sidebar' : 'sidebar__active'}>
            <Container className="sidebar__container">
                <Row>
                    <Nav as={Col} className="flex-column flex-lg-row justify-content-between">
                        {array.map((item, index) =>
                            <div key={index}>
                                <Nav.Link onClick={() => toggleComment(index)} className={showNavbar[index] ? "toggle__nav position-relative h3 border-bottom" : "active position-relative h3 border-bottom"}>{item.categories}</Nav.Link>
                                {item.links && item.links.map((test, j) => showNavbar[index] ? <Nav.Link key={j} href="#features">{test.link}</Nav.Link> : '')}
                            </div>
                        )}
                    </Nav>
                </Row>
            </Container>

        </div>
    );
}

export default Sidebar;