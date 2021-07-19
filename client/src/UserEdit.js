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

function UserEdit(props) {
  let [inputNombre, setInputNombre] = useState("");
  let [inputApellido, setInputApellido] = useState("");
  let [userEdit, setUserEdit] = useState({});

  const cambiarUser = () => {
    fetch("http://localhost:3001/user/edit", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: props.loginData.user.email,
        nombre: inputNombre,
        apellido: inputApellido,
      }),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setUserEdit(data));
  };

  return (
    <>
      <Container className={"user"}>
        <Row>
          <Col xs sm md lg xl={4}>
            <Card style={{ width: "20rem" }}>
              <Card.Img variant="top" src={props.loginData.user.foto} />
              <Card.Body>
                <Card.Title>¡Hola, {props.loginData.user.nombre}!</Card.Title>
                <Card.Text>
                  Estás en tu perfil, aquí puedes consultar tu información y
                  modificarla. Selecciona la opción que quieras utilizar:
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  <Link to="/user">Ver datos de perfil</Link>
                </ListGroupItem>
                <ListGroupItem>
                  <Link to="/user/training">Formaciones disponibles</Link>
                </ListGroupItem>
                <ListGroupItem>
                  <Link to="/user/meeting">Eventos disponibles</Link>
                </ListGroupItem>
              </ListGroup>
              <Card.Body className="list-group-item-dark">
                <Link to="/logout">Cerrar sesión</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs sm md lg xl={8}>
            <Card style={{ width: "50rem" }}>
              <Card.Body>
                <Card.Text>
                  <Container>
                    <Row>
                      <Col xs sm md lg xl={4}>
                        <h4>Modifica tus datos:</h4>
                        <InputGroup size="md" className="mb-3">
                          <FormControl
                            type="text"
                            value={inputNombre}
                            placeholder={"Introduce tu nuevo nombre"}
                            onChange={(e) => setInputNombre(e.target.value)}
                          />
                        </InputGroup>
                        <InputGroup size="xs" className="mb-3">
                          <FormControl
                            type="text"
                            value={inputApellido}
                            placeholder={"Introduce tu nuevo apellido"}
                            onChange={(e) => setInputApellido(e.target.value)}
                          />
                        </InputGroup>
                        <Button variant="dark" onClick={cambiarUser}>
                          Guardar cambios
                        </Button>
                        <p>{userEdit.mensaje}</p>
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

export default UserEdit;
