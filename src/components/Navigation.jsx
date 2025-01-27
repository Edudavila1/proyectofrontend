import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import imagen7 from '../Imagenes/LOGO.png';

const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-white shadow-lg border-bottom">
      <Container>
        {/* Logo */}
        <Navbar.Brand>
          <img
            src={imagen7}
            alt="LOGO"
            className="img-fluid"
            style={{ width: '140px', height: 'auto' }}
          />
        </Navbar.Brand>

        {/* Toggle para dispositivos móviles */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />

        {/* Links de navegación */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
           
            <Link to="/home" className="nav-link text-dark fw-medium mx-2">
              HOME
            </Link>
            <Link to="/clientes" className="nav-link text-dark fw-medium mx-2">
              CLIENTES
            </Link>
            <Link to="/contacto" className="nav-link text-dark fw-medium mx-2">
              CONTACTO
            </Link>
            <Link to="/iniciarsesion" className="nav-link text-danger fw-medium mx-2">
              INICIAR SESIÓN
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;