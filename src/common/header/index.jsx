import React, { useEffect, useState } from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

import { FaBars, FaChevronDown, FaChevronUp, FaTimes } from 'react-icons/fa';
function HeaderComp() {
  const [expanded, setExpanded] = useState(false);

  const [open, setOpen] = useState(false);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = (isOpen) => {
    setDropdownOpen(isOpen);
  };
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary custom-navbar" bg="dark" data-bs-theme="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Fyshino</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}>
            {expanded ? <FaTimes /> : <FaBars />} {/* Toggle between icons */}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="me-auto-">
              <Nav.Link href="/audience">Audience</Nav.Link>
              <Nav.Link href="/solutions">Solutions</Nav.Link>
              <NavDropdown id="basic-nav-dropdown" onClick={() => setOpen(!open)} title={
                <>
                  Insight{' '}
                  {dropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                </>
              }
                onToggle={handleDropdownToggle}>
                {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item> */}
                <Container className="dropdown-menu p-4 bg-danger" style={{ minWidth: '600px' }}>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum reprehenderit sint necessitatibus natus ut, itaque adipisci iusto consequatur, non error molestiae sit earum dolorem blanditiis libero deleniti, at perspiciatis illo.</p>
                </Container>
              </NavDropdown>
              <Nav.Link href="#link">Let's talk</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* {open && <div
        style={{
          position: 'absolute',
          //top: '80px',
          left: '0px',
          width: '100%',
          height: '100px',
          backgroundColor: 'transparent',
          zIndex: 2,
        }}
      >
        <HorizontalWidget />
      </div>} */}
    </>
  )
}

export default HeaderComp