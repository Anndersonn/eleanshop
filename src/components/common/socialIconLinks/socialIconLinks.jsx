import React from 'react'
import { Nav } from 'react-bootstrap'
import { Facebook, Instagram } from 'react-bootstrap-icons'

export default function SocialIconLinks() {
    return (
        <>
            <Nav.Link className="m-2 ml-3 d-none d-md-flex" href="#home"><Instagram /></Nav.Link>
            <Nav.Link className="m-2 d-none d-md-flex" href="#home"><Facebook /></Nav.Link>
        </>
    )
}
