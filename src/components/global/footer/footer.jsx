import React from 'react';
import './index.css'
import { Row, Container, Col } from 'react-bootstrap';
import ContactCredits from './contactCredits/contactCredits';
import AddressCredits from './addressCredits/addressCredits';
import SocialIconLinks from '../../common/socialIconLinks/socialIconLinks';
import FooterNavigationLinks from './footerNavigationLinks/footerNavigationLinks';
import NewsLetter from './newsLetter/newsLetter';

function Footer() {
    return (
        <Container className="footer__container d-flex flex-lg-row flex-column" id="footer">
            <Row xs={12} className="m-0 px-3">
                <Col className="px-0">
                    <ContactCredits />
                </Col>
            </Row>
            <Row xs={12} className="m-0 px-3 flex-column">
                <FooterNavigationLinks />
                <AddressCredits />
                <Col className="d-flex px-0">
                    <SocialIconLinks />
                </Col>
            </Row>
            <Row xs={12} className="flex-column m-0 px-3">
                <NewsLetter />
            </Row>
        </Container>
    );
}

export default Footer;