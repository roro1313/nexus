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

function AdminBuscar(props) {
  let [inputEmailBuscar, setInputEmailBuscar] = useState("");
  let [inputDepartamento, setInputDepartamento] = useState("");
  let [inputSede, setInputSede] = useState("");
  let [resultadoBusquedaUser, setResultadoBusquedaUser] = useState([]);
  let [resultadoBusquedaDep, setResultadoBusquedaDep] = useState([]);
  let [resultadoBusquedaSede, setResultadoBusquedaSede] = useState([]);
  let [feedbackUser, setFeedbackUser] = useState("");
  let [feedbackDep, setFeedbackDep] = useState("");
  let [feedbackSede, setFeedbackSede] = useState("");

  //Revisar el feedback de la búsqueda, solo sale al segundo click del botón
  const buscarUser = () => {
    setFeedbackUser("");
    fetch("http://localhost:3001/admin/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: inputEmailBuscar,
      }),
      credentials: "include",
    }).then((res) =>
      res.json().then((data) => {
        setResultadoBusquedaUser(data.respuesta);
      })
    );
    resultadoBusquedaUser.length === 0
      ? setFeedbackUser("Usuario no encontrado")
      : setFeedbackUser("");
  };

  const buscarDep = () => {
    setInputDepartamento("");
    setFeedbackDep("");
    fetch("http://localhost:3001/admin/departamento", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ departamento: inputDepartamento }),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setResultadoBusquedaDep(data.respuesta);
        setInputDepartamento("");
      });
      resultadoBusquedaDep.length === 0
      ? setFeedbackDep("Departamento no encontrado")
      : setFeedbackDep("");
  };

  const buscarSede = () => {
    setInputSede("");
    setFeedbackSede("");
    fetch("http://localhost:3001/admin/sede", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sede: inputSede }),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setResultadoBusquedaSede(data.respuesta);
        setInputSede("");
      });
      resultadoBusquedaSede.length === 0
      ? setFeedbackSede("Sede no encontrada")
      : setFeedbackSede("");
  };

  return (
    <>
      <Container className={"user"}>
        <Row>
          <Col xs sm md={12} lg xl={4}>
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
                        <Card.Title>Buscar usuarios:</Card.Title>
                        <p>Introduce un email para buscar usuarios.</p>
                        <InputGroup size="md" className="mb-3">
                          <FormControl
                            type="text"
                            value={inputEmailBuscar}
                            placeholder={"Email"}
                            onChange={(e) => {
                              setInputEmailBuscar(e.target.value);
                            }}
                          />
                        </InputGroup>
                        <Button variant="dark" onClick={buscarUser}>
                          Buscar usuario
                        </Button>
                        <p>{feedbackUser}</p>
                        {resultadoBusquedaUser.length !== 0 ? (
                          <Tarjeta resultadoBusqueda={resultadoBusquedaUser} />
                        ) : (
                          <h1></h1>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col xs sm md lg xl={8}>
                        <Card.Title>Buscar por departamento:</Card.Title>
                        <p>Introduce un departamento para buscar usuarios.</p>
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
                        <Button variant="dark" onClick={buscarDep}>
                          Buscar por departamento
                        </Button>
                        <p>{feedbackDep}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs sm md lg xl={8}>
                        {resultadoBusquedaDep.length !== 0 ? (
                          <Tarjeta resultadoBusqueda={resultadoBusquedaDep} />
                        ) : (
                          <h1></h1>
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col xs sm md lg xl={8}>
                        <Card.Title>Buscar por sede:</Card.Title>
                        <p>Introduce una sede para buscar usuarios.</p>
                        <InputGroup size="md" className="mb-3">
                          <FormControl
                            type="text"
                            value={inputSede}
                            placeholder={"Sede"}
                            onChange={(e) => setInputSede(e.target.value)}
                          />
                        </InputGroup>
                        <Button variant="dark" onClick={buscarSede}>
                          Buscar por sede
                        </Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs sm md lg xl={8}>
                        {resultadoBusquedaSede.length !== 0 ? (
                          <Tarjeta resultadoBusqueda={resultadoBusquedaSede} />
                        ) : (
                          <h1></h1>
                        )}
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

export default AdminBuscar;
