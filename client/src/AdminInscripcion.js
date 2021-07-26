import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import AdminMenu from "./AdminMenu";
import Training from "./Training";

function AdminInscripcion(props) {
  let [feedback, setFeedback] = useState("");
  let [inputCode, setInputCode] = useState("");
  let [asistentes, setAsistentes] = useState([]);
  let [nuevoAsistente, setNuevoAsistente] = useState("");
  let [training, setTraining] = useState([]);

  useEffect(() => {
    fetch(`${props.url}/training`)
      .then((res) => res.json())
      .then((data) => {
        setTraining(data.contenido);
        setAsistentes(data.contenido);
      });
  }, []);

  const addAsistente = () => {
    let nuevo = [...asistentes];
    nuevo.push(nuevoAsistente);
    setAsistentes(nuevo);

    fetch(`${props.url}/admin/training/sign`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: inputCode,
        nombre: nuevoAsistente,
      }),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setAsistentes(data.contenido);
        setFeedback(data.mensaje);
      })
  };

  return (
    <>
      <Container className={"user"}>
        <Row>
          <Col xs sm md={12} lg xl={4}>
            <AdminMenu loginData={props.loginData} />
          </Col>
          <Col xs sm md lg xl={8}>
            <Card style={{ width: "40rem" }}>
              <Card.Body>
                <Card.Text>
                  <Container>
                    <Row>
                      <Col xs sm md lg xl={8}>
                        <Card.Title>Inscríbete a una formación:</Card.Title>
                        <p>¿Tienes un código de formación?</p>
                        <InputGroup size="md" className="mb-3">
                          <FormControl
                            type="text"
                            value={inputCode}
                            placeholder={"Introduce el código de formación"}
                            onChange={(e) => setInputCode(e.target.value)}
                          />
                        </InputGroup>
                        <InputGroup size="md" className="mb-3">
                          <FormControl
                            type="text"
                            value={nuevoAsistente}
                            placeholder={"Introduce el nombre del asistente"}
                            onChange={(e) => setNuevoAsistente(e.target.value)}
                          />
                        </InputGroup>
                        <Button variant="dark" onClick={addAsistente}>
                          Inscripción
                        </Button>
                        <p>{feedback}</p>
                      </Col>
                      <Training training={training} />
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

export default AdminInscripcion;
