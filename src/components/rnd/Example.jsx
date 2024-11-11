import React from "react";
import { Container, Row, Col, Button, Nav, Navbar, Dropdown,NavDropdown } from "react-bootstrap";
import './style.css';

function Example() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#1a1a1a", padding: "20px" }}>
      <Container>
        <Navbar.Brand href="#" style={{ color: "#fff", fontWeight: "bold" }}>
          Best Buy.<span style={{ color: "yellow" }}>Ads</span>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#" style={{ color: "#fff", marginRight: "20px" }}>
            Audience
          </Nav.Link>
          <Nav.Link href="#" style={{ color: "#fff", marginRight: "20px" }}>
            Solutions
          </Nav.Link>
          <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{ color: "#fff" }}>
              Insight
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ backgroundColor: "#333" }}>
              <Dropdown.Item href="#" style={{ color: "#fff" }}>Success Stories</Dropdown.Item>
              <Dropdown.Item href="#" style={{ color: "#fff" }}>Intel & Ideas</Dropdown.Item>
              <Dropdown.Item href="#" style={{ color: "#fff" }}>What's New(s)</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <NavDropdown title="Mega Menu" id="navbarScrollingDropdown">
              <Container className="p-4" style={{ minWidth: '600px' }}>
                <Row>
                  <Col md={4}>
                    <h6>Category 1</h6>
                    <Nav.Link href="#action1">Action 1</Nav.Link>
                    <Nav.Link href="#action2">Action 2</Nav.Link>
                    <Nav.Link href="#action3">Action 3</Nav.Link>
                  </Col>
                  <Col md={4}>
                    <h6>Category 2</h6>
                    <Nav.Link href="#action4">Action 4</Nav.Link>
                    <Nav.Link href="#action5">Action 5</Nav.Link>
                    <Nav.Link href="#action6">Action 6</Nav.Link>
                  </Col>
                  <Col md={4}>
                    <h6>Category 3</h6>
                    <Nav.Link href="#action7">Action 7</Nav.Link>
                    <Nav.Link href="#action8">Action 8</Nav.Link>
                    <Nav.Link href="#action9">Action 9</Nav.Link>
                  </Col>
                </Row>
              </Container>
            </NavDropdown>
          <Button variant="primary" style={{ marginLeft: "20px", fontWeight: "bold" }}>
            Let's talk
          </Button>
        </Nav>
      </Container>
     
    </Navbar>
  );
}

export default Example;
