import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <Navbar className="d-flex justify-content-between " bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        FUSION 3D
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">
            Inicio
          </Nav.Link>
          <Nav.Link as={Link} to="/category/diseño-tuercas">
            Diseño-tuercas
          </Nav.Link>

          <Nav.Link as={Link} to="/category/diseño-novedades">
            Diseño-Novedades
          </Nav.Link>

          <Nav.Link as={Link} to="/category/bustos">
            Bustos
          </Nav.Link>

          <Nav.Link as={Link} to="/category/soporte-3d">
            Soportes
          </Nav.Link>

          <Nav.Link as={Link} to="/category/articulados-3d">
            Articulados 3d
          </Nav.Link>
          <Nav.Link as={Link} to="/cart">
            <CartWidget />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
