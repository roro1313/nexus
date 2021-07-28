import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import AdminMenu from "./AdminMenu";
import Footer from "./Footer";

function AdminInscripcion(props) {
  let [feedback, setFeedback] = useState("");
  let [inputCode, setInputCode] = useState("");
  let [asistentes, setAsistentes] = useState([]);
  let [nuevoAsistente, setNuevoAsistente] = useState("");

  useEffect(() => {
    fetch(`${props.url}/admin/training`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.respuesta);
        setAsistentes(data.respuesta);
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
        setAsistentes(data.respuesta);
        setFeedback(data.mensaje);
      });
  };

  const formaciones = asistentes.map((formacion, index) => {
    return (
      <Card style={{ width: "23rem" }}>
        <Card.Body>
          <Card.Title>{formacion.nombre}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Código: {formacion.code}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            {formacion.fecha}, {formacion.hora}, {formacion.lugar}
          </Card.Subtitle>
          <Card.Text>{formacion.descripcion}</Card.Text>
          <Card.Text>Asistentes:</Card.Text>
          {console.log(formacion.asistentes)}

          {formacion.asistentes !== undefined
            ? formacion.asistentes.map((form, index) => {
                return (
                  <ListGroup.Item variant="secondary">
                    {form.nombre}
                  </ListGroup.Item>
                );
              })
            : ""}
        </Card.Body>
      </Card>
    );
  });
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
                      <Card.Title className="nunito"><strong>Formaciones disponibles:</strong></Card.Title>
                      <p>¿Quieres inscribirte a alguna?</p>
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
                  </Row>
                  <div>{formaciones}</div>
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

export default AdminInscripcion;
