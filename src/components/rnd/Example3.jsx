import React from 'react';
import { Navbar, Nav, Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';
import './style.css'
function MegaMenu() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link}>Mega Menu</Dropdown.Toggle>
              <Dropdown.Menu className="w-100 p-4">
                <Container>
                  <Row>
                    <Col md={4}>
                      <h5>Category 1</h5>
                      <Nav.Link href="#link1">Item 1</Nav.Link>
                      <Nav.Link href="#link2">Item 2</Nav.Link>
                      <Nav.Link href="#link3">Item 3</Nav.Link>
                    </Col>
                    <Col md={4}>
                      <h5>Category 2</h5>
                      <Nav.Link href="#link4">Item 4</Nav.Link>
                      <Nav.Link href="#link5">Item 5</Nav.Link>
                      <Nav.Link href="#link6">Item 6</Nav.Link>
                    </Col>
                    <Col md={4}>
                      <h5>Category 3</h5>
                      <Nav.Link href="#link7">Item 7</Nav.Link>
                      <Nav.Link href="#link8">Item 8</Nav.Link>
                      <Nav.Link href="#link9">Item 9</Nav.Link>
                    </Col>
                  </Row>
                </Container>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MegaMenu;
