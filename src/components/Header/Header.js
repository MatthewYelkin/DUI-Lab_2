import React from 'react';
import logo from '../../img/logo.png'
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Header = () => {
    const {t, i18n} = useTranslation();

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
                        <Link to="/" className="nav-link" style={{color:"#181818", fontSize:"20px"}}>{t('header_homePage')}</Link>
                        <Link to="/artists" className="nav-link" style={{color:"#181818", fontSize:"20px"}}>{t('header_singersPage')}</Link>
                    </Nav>
                    <NavDropdown style={{color:"#181818", fontSize:"20px"}} title={t('header_language')} id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={()=>i18n.changeLanguage("en")}>{t('header_english')}</NavDropdown.Item>
                        <NavDropdown.Item onClick={()=>i18n.changeLanguage("ru")}>{t('header_russian')}</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;