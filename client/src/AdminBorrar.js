import { Link } from "react-router-dom";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Tarjeta from "./Tarjeta";

function AdminBorrar(props) {
  let [inputEmail, setInputEmail] = useState("");
  let [borrado, setBorrado] = useState([]);
  let [feedback, setFeedback] = useState("");

  const borrarUser = () => {
    fetch("http://localhost:3001/admin/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: inputEmail,
      }),
      credentials: "include",
    }).then((res) =>
      res.json().then((data) => {
        setBorrado(data.respuesta);
        setFeedback(data.mensaje);
        setInputEmail("");
      })
    );
  };

  return (
    <>
      <Container className={"user"}>
        <Row>
          <Col xs sm md={1} lg xl={4}>
            <Card className={"card"} style={{ width: "20rem" }}>
              {/* <Card.Img variant="top" src={props.loginData.user.foto} /> */}
              <Card.Body>
                <Card.Title>Admin</Card.Title>
                <Card.Text>
                  Estás en el perfil de administrador. Desde aquí puedes crear
                  usuarios, editar usuarios y borrar usuarios.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  <Link to="/admin/find">Buscar usuarios</Link>
                </ListGroupItem>
                <ListGroupItem>
                  <Link to="/admin/create">Crear usuarios</Link>
                </ListGroupItem>
                <ListGroupItem>
                  <Link to="/admin/edit">Editar usuarios</Link>
                </ListGroupItem>
                <ListGroupItem>
                  <Link to="/admin/delete">Eliminar usuarios</Link>
                </ListGroupItem>
                <ListGroupItem>
                  <Link to="/admin/training">Formaciones disponibles</Link>
                </ListGroupItem>
                <ListGroupItem>
                  <Link to="/admin/meeting">Eventos disponibles</Link>
                </ListGroupItem>
              </ListGroup>
              <Card.Body className="list-group-item-dark">
                <Link to="/logout">Cerrar sesión</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs sm md lg xl={8}>
            <Card style={{ width: "40rem" }}>
              <Card.Body>
                <Card.Text>
                  <Container>
                    <Row>
                      <Col xs sm md lg xl={8}>
                        <Card.Title>Borrar usuarios:</Card.Title>
                        <p>Introduce un email para eliminar usuarios.</p>
                        <InputGroup size="md" className="mb-3">
                          <FormControl
                            type="text"
                            value={inputEmail}
                            placeholder={"email"}
                            onChange={(e) => setInputEmail(e.target.value)}
                          />
                        </InputGroup>
                        <Button variant="dark" onClick={borrarUser}>
                          Borrar usuario
                        </Button>
                        <p>{feedback}</p>
                      </Col>
                    </Row>
                  </Container>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AdminBorrar;
