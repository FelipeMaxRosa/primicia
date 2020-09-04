import React from "react";
import Navbar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
// import { NavDropdown } from "react-bootstrap";

import "./styles.css";

const MaxNavBar = () => {
  return (
    <Navbar id="home-navbar" bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        Primícia
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/moda">
            Moda
          </Nav.Link>
          <Nav.Link as={Link} to="/bazar">
            Bazar
          </Nav.Link>
          <Nav.Link as={Link} to="/artesanato">
            Artesanato
          </Nav.Link>
          <Nav.Link as={Link} to="/contato">
            Contato
          </Nav.Link>
          {/* <Nav.Link href="/moda">Moda</Nav.Link>
          <Nav.Link href="/bazar">Bazar</Nav.Link>
          <Nav.Link href="/artesanato">Artesanato</Nav.Link>
          <Nav.Link href="/contato">Contato</Nav.Link> */}
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MaxNavBar;
