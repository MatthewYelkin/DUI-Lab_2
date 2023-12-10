import React from 'react';
import logo from '../img/logo.png'
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

const Header = () => {
    const mes = () => {
        console.log("Translate")
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary mb-2">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src= {logo}
                        width="50"
                        height="50"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Главная</Nav.Link>
                        <Nav.Link href="/">Исполнители</Nav.Link>
                    </Nav>
                    <NavDropdown title="Язык" id="basic-nav-dropdown">
                        <NavDropdown.Item href="">Английский</NavDropdown.Item>
                        <NavDropdown.Item href="">Русский</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;