import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/esm/Container";
import logo from "./logo.svg";
import logo40 from "./logo40.svg";

function Cabecera(props) {
  if (props.loginData.logged) {
    return (
      <Navbar sticky="top" className={"cabecera"} bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="Logo nexus"
              src={logo40}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/about">Acerca de</Nav.Link>
          </Nav>
          <Nav.Link href="#">¡Hola, {props.loginData.user.nombre}!</Nav.Link>
          <img
            className="imagenCabecera"
            src={props.loginData.user.foto}
          ></img>
        </Container>
      </Navbar>
    );
  } else {
    return (
      <Navbar sticky="top" className={"cabecera"} bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="Logo nexus"
              src={logo40}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/about">Acerca de</Nav.Link>
          </Nav>
          <Nav.Link href="/login">Iniciar sesión</Nav.Link>
        </Container>
      </Navbar>
    );
  }
}

export default Cabecera;
