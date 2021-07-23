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
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Tarjeta from "./Tarjeta";

function AdminCrear(props) {
  let [inputNombre, setInputNombre] = useState("");
  let [inputApellido, setInputApellido] = useState("");
  let [inputPuesto, setInputPuesto] = useState("");
  let [inputDepartamento, setInputDepartamento] = useState("");
  let [inputSede, setInputSede] = useState("");
  let [inputMovil, setInputMovil] = useState("");
  let [inputFoto, setInputFoto] = useState("");
  let [inputEmail, setInputEmail] = useState("");
  let [inputPassword, setInputPassword] = useState("");
  let [admin, setAdmin] = useState(false);
  let [usuarioCreado, setUsuarioCreado] = useState([]);
  let [feedback, setFeedback] = useState("");

  const checkAdmin = () => {
    if (admin === true) {
      setAdmin(false);
    } else {
      setAdmin(true);
    }
  };

  const crearUser = () => {
    fetch("http://localhost:3001/admin/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: inputEmail,
        nombre: inputNombre,
        apellido: inputApellido,
        puesto: inputPuesto,
        departamento: inputDepartamento,
        sede: inputSede,
        movil: inputMovil,
        foto: inputFoto,
        password: inputPassword,
        admin: admin,
      }),
      credentials: "include",
    }).then((res) =>
      res.json().then((data) => {
        setUsuarioCreado(data.datos);
        setFeedback(data.mensaje);
        setInputNombre("");
        setInputApellido("");
        setInputEmail("");
        setInputPassword("");
        setInputMovil("");
        setInputPuesto("");
        setInputDepartamento("");
        setInputSede("");
        setInputFoto("");
        setAdmin(false);
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
                        <Card.Title>Crear usuarios:</Card.Title>
                        <p>Completa la información para crear nuevos usuarios.</p>
                        <Form.Check
                          inline
                          label="Marca esta casilla si estás creando un perfil de Admin"
                          name="admin"
                          value={admin}
                          onChange={checkAdmin}
                        />
                        <InputGroup size="md" className="mb-3">
                          <FormControl
                            type="text"
                            value={inputNombre}
                            placeholder={"Nombre"}
                            onChange={(e) => setInputNombre(e.target.value)}
                          />
                        </InputGroup>
                        <InputGroup size="md" className="mb-3">
                          <FormControl
                            type="text"
                            value={inputApellido}
                            placeholder={"Apellido"}
                            onChange={(e) => setInputApellido(e.target.value)}
                          />
                        </InputGroup>

                          <InputGroup size="md" className="mb-3">
                            <FormControl
                              type="text"
                              value={inputPuesto}
                              placeholder={"Puesto"}
                              onChange={(e) => setInputPuesto(e.target.value)}
                            />
                          </InputGroup>
                          <InputGroup size="md" className="mb-3">
                            <FormControl
                              type="text"
                              value={inputDepartamento}
                              placeholder={"Departamento"}
                              onChange={(e) =>
                                setInputDepartamento(e.target.value)
                              }
                            />
                          </InputGroup>
                          <InputGroup size="md" className="mb-3">
                            <FormControl
                              type="text"
                              value={inputSede}
                              placeholder={"Sede"}
                              onChange={(e) => setInputSede(e.target.value)}
                            />
                          </InputGroup>
                          <InputGroup size="md" className="mb-3">
                            <FormControl
                              type="text"
                              value={inputMovil}
                              placeholder={"Movil"}
                              onChange={(e) => setInputMovil(e.target.value)}
                            />
                          </InputGroup>
                          <InputGroup size="md" className="mb-3">
                            <FormControl
                              type="text"
                              value={inputFoto}
                              placeholder={"Introduce la URL de la foto del usuario"}
                              onChange={(e) => setInputFoto(e.target.value)}
                            />
                          </InputGroup>
                          <InputGroup size="md" className="mb-3">
                          <FormControl
                            type="text"
                            value={inputEmail}
                            placeholder={"email"}
                            onChange={(e) => setInputEmail(e.target.value)}
                          />
                          <InputGroup size="md" className="mb-3">
                            <FormControl
                              type="password"
                              value={inputPassword}
                              placeholder={"Contraseña"}
                              onChange={(e) => setInputPassword(e.target.value)}
                            />
                            <Form.Text id="passwordHelpBlock" muted>
                              Elige una contraseña superior a los 8 caracteres.
                              Para mayor seguridad, añade mayúsculas, números y
                              caracteres especiales. Por favor, no añadas
                              espacios ni emojis.
                            </Form.Text>
                          </InputGroup>
                        </InputGroup>
                        <Button variant="dark" onClick={crearUser}>
                          Guardar cambios y crear perfil
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

export default AdminCrear;
