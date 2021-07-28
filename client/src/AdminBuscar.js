import { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from 'react-bootstrap/Form'
import AdminMenu from "./AdminMenu";
import Tarjeta from "./Tarjeta";
import Footer from "./Footer";

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

  const buscarUser = () => {
    setFeedbackUser("");
    fetch(`${props.url}/admin/user`, {
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
        setInputEmailBuscar("");
        setFeedbackUser(data.mensaje);
      })
    );
  };

  const buscarDep = () => {
    setInputDepartamento("");
    setFeedbackDep("");
    fetch(`${props.url}/admin/departamento`, {
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
        setFeedbackDep(data.mensaje);
      });
  };

  const buscarSede = () => {
    setInputSede("");
    setFeedbackSede("");
    fetch(`${props.url}/admin/sede`, {
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
        setFeedbackSede(data.mensaje);
      });
  };

  return (
    <>
      <Container /* className={"user"} */>
        <Row>
          <Col xs sm md={12} lg xl={4}>
            <AdminMenu loginData={props.loginData} />
          </Col>
          <Col xs sm md lg xl={8}>
            {/* <Card style={{ width: "40rem" }}> */}
              <Card.Body>
                <Card.Text>
                  <Container>
                    <Row>
                      <Col xs sm md lg xl={8}>
                        <Card.Title className="nunito"><strong>Buscar usuarios:</strong></Card.Title>
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
                        <Card.Title className="nunito"><strong>Buscar por departamento:</strong></Card.Title>
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
                        <Card.Title className="nunito"><strong>Buscar por sede:</strong></Card.Title>
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
                        <p>{feedbackSede}</p>
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
            {/* </Card> */}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default AdminBuscar;
