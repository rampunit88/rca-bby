import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Row, Col } from 'react-bootstrap';
import { FaBars, FaTimes,FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import icons from react-icons
import './style.css';

function MyNavbar() {
  const [expanded, setExpanded] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = (isOpen) => {
    setDropdownOpen(isOpen);
  };

  return (
    <Navbar expanded={expanded} expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        >
          {expanded ? <FaTimes /> : <FaBars />} {/* Toggle between icons */}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <NavDropdown
              title={
                <>
                  Dropdown{' '}
                  {dropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                </>
              }
              id="basic-nav-dropdown"
              onToggle={handleDropdownToggle}
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something else</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

MyNavbar.Megamenu = () => {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">My Brand</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
  
              {/* Regular Dropdown */}
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              </NavDropdown>
  
              {/* Mega Menu Dropdown */}
              <NavDropdown title="Mega Menu" id="mega-menu" className="mega-menu">
                <div className="mega-menu-content">
                  <Container fluid>
                    <Row>
                      <Col>
                        <h6>Category 1</h6>
                        <NavDropdown.Item href="#item1">Item 1</NavDropdown.Item>
                        <NavDropdown.Item href="#item2">Item 2</NavDropdown.Item>
                        <NavDropdown.Item href="#item3">Item 3</NavDropdown.Item>
                      </Col>
                      <Col>
                        <h6>Category 2</h6>
                        <NavDropdown.Item href="#item4">Item 4</NavDropdown.Item>
                        <NavDropdown.Item href="#item5">Item 5</NavDropdown.Item>
                        <NavDropdown.Item href="#item6">Item 6</NavDropdown.Item>
                      </Col>
                      <Col>
                        <h6>Category 3</h6>
                        <NavDropdown.Item href="#item7">Item 7</NavDropdown.Item>
                        <NavDropdown.Item href="#item8">Item 8</NavDropdown.Item>
                        <NavDropdown.Item href="#item9">Item 9</NavDropdown.Item>
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
  };
  MyNavbar.Megamenu2 = MegaMenuNavbar;
export default MyNavbar;

function MegaMenuNavbar() {
    return (
      <Navbar expand="lg" bg="light" variant="light" sticky="top">
        <Container>
          <Navbar.Brand href="#">MyBrand</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <NavDropdown title="Mega Menu" id="mega-menu-dropdown">
                <Container className="mega-menu">
                  <Row>
                    <Col sm={4}>
                      <h6>Category 1</h6>
                      <NavDropdown.Item href="#action1">Action 1</NavDropdown.Item>
                      <NavDropdown.Item href="#action2">Action 2</NavDropdown.Item>
                      <NavDropdown.Item href="#action3">Action 3</NavDropdown.Item>
                    </Col>
                    <Col sm={4}>
                      <h6>Category 2</h6>
                      <NavDropdown.Item href="#action4">Action 4</NavDropdown.Item>
                      <NavDropdown.Item href="#action5">Action 5</NavDropdown.Item>
                      <NavDropdown.Item href="#action6">Action 6</NavDropdown.Item>
                    </Col>
                    <Col sm={4}>
                      <h6>Category 3</h6>
                      <NavDropdown.Item href="#action7">Action 7</NavDropdown.Item>
                      <NavDropdown.Item href="#action8">Action 8</NavDropdown.Item>
                      <NavDropdown.Item href="#action9">Action 9</NavDropdown.Item>
                    </Col>
                  </Row>
                </Container>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
