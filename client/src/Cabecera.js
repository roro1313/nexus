import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
/* import NavDropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button"; */

function Cabecera(){
    return(
        <Navbar bg="primary" expand="lg">
        <Navbar.Brand href="#home">@nexusPeople</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Empresa</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default Cabecera