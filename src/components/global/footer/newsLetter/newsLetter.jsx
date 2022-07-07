import React from 'react'
import { Col, Form } from 'react-bootstrap'

export default function NewsLetter() {
    return (
        <>
            <Form.Group className="p-0" as={Col} >
                <Form.Control className="footer__input rounded-0" required type="name" placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="p-0" as={Col} >
                <Form.Control className="footer__input rounded-0" required type="mail" placeholder="E-mail" />
            </Form.Group>
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Я согласен с политикой конфиденциальности</label>
            </div>
            <Form.Group className="p-0 mt-3" as={Col} >
                <Form.Control className="footer__input rounded-0" required type="text" placeholder="Subscribe" />
            </Form.Group>
        </>
    )
}
