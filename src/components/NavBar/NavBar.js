import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const NavBar = () => {
  const cartItemCount = 3; // 

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        FUSION 3D
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">
            Inicio
          </Nav.Link>
          <Nav.Link as={Link} to="/category/1">
            Productos
          </Nav.Link>
          {}
          <Nav.Link as={Link} to="/category/2">
            Novedades
          </Nav.Link>
          {}
          <Nav.Link as={Link} to="/category/3">
            Ofertas
          </Nav.Link>
          {}
          <Nav.Link as={Link} to="/contacto">
            Contacto
          </Nav.Link>
          {}
          <Nav.Link as={Link} to="/item/123">
            {}
            <FaShoppingCart />
            {cartItemCount > 0 && <span className="cart-item-count">{cartItemCount}</span>}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
