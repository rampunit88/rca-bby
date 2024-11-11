import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Row, Col } from 'react-bootstrap';
import './style.css'
function MegaMenu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary custom-navbar" bg="dark" data-bs-theme="dark" >
      <Container>
        <Navbar.Brand href="#home">Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto-">
          <Nav.Link href="/audience">Audience</Nav.Link>
          <Nav.Link href="/solutions">Solutions</Nav.Link>
            <NavDropdown title="Mega Menu" id="basic-nav-dropdown" className="mega-menu">
              <div className="mega-menu-content">
                <Container>
                  <Row>
                    <Col sm={4}>
                      <NavDropdown.Item href="#action/3.1">Option 1</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Option 2</NavDropdown.Item>
                    </Col>
                    <Col sm={4}>
                      <NavDropdown.Item href="#action/3.3">Option 3</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.4">Option 4</NavDropdown.Item>
                    </Col>
                    <Col sm={4}>
                      <NavDropdown.Item href="#action/3.5">Option 5</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.6">Option 6</NavDropdown.Item>
                    </Col>
                  </Row>
                </Container>
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MegaMenu;
