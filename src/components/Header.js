import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Кібервіра</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/services">Послуги</Nav.Link>
                        <Nav.Link href="/contacts">Контакти</Nav.Link>
                        <NavDropdown title="Релігії" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/christianity">Християнство</NavDropdown.Item>
                            <NavDropdown.Item href="/islam">Іслам</NavDropdown.Item>
                            <NavDropdown.Item href="/buddhism">Буддизм</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/deism">Деїзм</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/services">Послуги</Nav.Link>
                        <Nav.Link eventKey={2} href="/contacts">
                            Контакти
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;