import React from 'react';
import logo from '../../img/logo.png'
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";

const Header = () => {
    const mes = () => {
        console.log("Translate")
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Link to="/" className="navbar-brand">
                    <img
                        src= {logo}
                        width="50"
                        height="50"
                        alt="React Bootstrap logo"
                    />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className="nav-link" style={{color:"#181818", fontSize:"20px"}}>Главная</Link>
                        <Link to="/singers" className="nav-link" style={{color:"#181818", fontSize:"20px"}}>Исполнители</Link>
                    </Nav>
                    <NavDropdown style={{color:"#181818", fontSize:"20px"}} title="Язык" id="basic-nav-dropdown">
                        <NavDropdown.Item href="">Английский</NavDropdown.Item>
                        <NavDropdown.Item href="">Русский</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;