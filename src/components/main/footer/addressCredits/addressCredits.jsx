import React from 'react'
import { Col } from 'react-bootstrap';

function AddressCredits() {
    return (
        <Col className="d-flex text-center align-items-start flex-xl-row flex-column px-0">
            <p className=" font-weight-bold text-left"> <span className="d-block">АДРЕС: </span> г. Москва, Новая площадь 8, стр.2, 5 этаж</p>
            <p className="pl-xl-5 pl-0 font-weight-bold text-left"> <span className="d-block">РЕЖИМ РАБОТЫ: </span>с 9.00 до 21.00 шоурум: с 12.00 до 21.00</p>
        </Col>
    );
}

export default AddressCredits;