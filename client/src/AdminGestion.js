import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
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

function AdminGestion(props) {
  let [feedbackEdit, setFeedbackEdit] = useState("");
  let [inputNombre, setInputNombre] = useState("");
  let [feedback, setFeedback] = useState("");
  let [feedbackBuscar, setFeedbackBuscar] = useState("");
  let [feedbackDel, setFeedbackDel] = useState("");
  let [inputCode, setInputCode] = useState("");
  let [nombreEvento, setNombreEvento] = useState("");
  let [nombreEditEvento, setNombreEditEvento] = useState("");
  let [horaEvento, setHoraEvento] = useState("");
  let [horaEditEvento, setHoraEditEvento] = useState("");
  let [lugarEvento, setLugarEvento] = useState("");
  let [lugarEditEvento, setLugarEditEvento] = useState("");
  let [descripcionEvento, setDescripcionEvento] = useState("");
  let [descripcionEditEvento, setDescripcionEditEvento] = useState("");
  let [codeEvento, setCodeEvento] = useState("");
  let [fechaEvento, setFechaEvento] = useState("");
  let [fechaEditEvento, setFechaEditEvento] = useState("");
  let [eventEdit, setEventEdit] = useState([]);
  let [eventNew, setEventNew] = useState([]);
  let [eventDel, setEventDel] = useState([]);
  let [resultadoBusqueda, setResultadoBusqueda] = useState({});
  let [codeBorrar, setCodeBorrar] = useState("");

  const crearEvento = () => {
    fetch(`${props.url}/admin/training/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: codeEvento,
        nombre: nombreEvento,
        lugar: lugarEvento,
        fecha: fechaEvento,
        descripcion: descripcionEvento,
        hora: horaEvento,
      }),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setEventNew(data);
        setFeedback(data.mensaje);
      });
  };

  const editarEvento = () => {
    fetch(`${props.url}/admin/training/edit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: codeEvento,
        nombre: nombreEditEvento,
        lugar: lugarEditEvento,
        fecha: fechaEditEvento,
        descripcion: descripcionEditEvento,
        hora: horaEditEvento,
      }),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setEventEdit(data);
        setFeedbackEdit(data.mensaje);
      });
  };

  const buscarEvento = () => {
    fetch(`${props.url}/admin/eventos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: inputCode,
      }),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.respuesta.length !== 0) {
          setResultadoBusqueda(data.respuesta[0]);
          setFeedbackBuscar(data.mensaje);
          setNombreEditEvento(data.respuesta[0].nombre);
          setLugarEditEvento(data.respuesta[0].lugar);
          setFechaEditEvento(data.respuesta[0].fecha);
          setHoraEditEvento(data.respuesta[0].hora);
          setDescripcionEditEvento(data.respuesta[0].descripcion);
        } else {
          setFeedbackBuscar(data.mensaje);
        }
      });
  };

  const borrarEvento = () => {
    fetch(`${props.url}/admin/training/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: codeBorrar,
      }),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setEventDel(data);
        setFeedbackDel(data.mensaje);
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
                      <Card.Title className="nunito">
                        <strong>Editar evento:</strong>
                      </Card.Title>
                      <p>¿De qué evento quieres cambiar los datos?</p>
                      <InputGroup size="md" className="mb-3">
                        <FormControl
                          type="text"
                          value={inputCode}
                          placeholder={"Introduce el código del evento"}
                          onChange={(e) => setInputCode(e.target.value)}
                        />
                      </InputGroup>
                      <Button variant="dark" onClick={buscarEvento}>
                        Buscar evento
                      </Button>
                      <p>{feedbackBuscar}</p>
                      <InputGroup size="md" className="mb-3">
                        <FormControl
                          type="text"
                          value={nombreEditEvento}
                          placeholder={"Nombre del evento"}
                          onChange={(e) => setNombreEditEvento(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" className="mb-3">
                        <FormControl
                          type="text"
                          value={lugarEditEvento}
                          placeholder={"Lugar de realización del evento"}
                          onChange={(e) => setLugarEditEvento(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" className="mb-3">
                        <FormControl
                          type="text"
                          value={fechaEditEvento}
                          placeholder={"Fecha del evento"}
                          onChange={(e) => setFechaEditEvento(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" className="mb-3">
                        <FormControl
                          type="text"
                          value={horaEditEvento}
                          placeholder={"Hora del evento"}
                          onChange={(e) => setHoraEditEvento(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" className="mb-3">
                        <FormControl
                          type="text"
                          value={descripcionEditEvento}
                          placeholder={"Descripcion del evento"}
                          onChange={(e) =>
                            setDescripcionEditEvento(e.target.value)
                          }
                        />
                      </InputGroup>
                      <Button variant="dark" onClick={editarEvento}>
                        Editar los datos del evento
                      </Button>
                      <p>{feedbackEdit}</p>
                      <Card.Title className="nunito margins">
                        <strong>Crea un nuevo evento:</strong>
                      </Card.Title>
                      <InputGroup size="md" className="mb-3">
                        <FormControl
                          type="text"
                          value={nombreEvento}
                          placeholder={"Nombre del evento"}
                          onChange={(e) => setNombreEvento(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" className="mb-3">
                        <FormControl
                          type="text"
                          value={lugarEvento}
                          placeholder={"Lugar de realización del evento"}
                          onChange={(e) => setLugarEvento(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" className="mb-3">
                        <FormControl
                          type="text"
                          value={fechaEvento}
                          placeholder={"Fecha del evento"}
                          onChange={(e) => setFechaEvento(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" className="mb-3">
                        <FormControl
                          type="text"
                          value={horaEvento}
                          placeholder={"Hora del evento"}
                          onChange={(e) => setHoraEvento(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" className="mb-3">
                        <FormControl
                          type="text"
                          value={codeEvento}
                          placeholder={"Código del evento"}
                          onChange={(e) => setCodeEvento(e.target.value)}
                        />
                      </InputGroup>
                      <InputGroup size="md" className="mb-3">
                        <FormControl
                          type="text"
                          value={descripcionEvento}
                          placeholder={"Descripcion del evento"}
                          onChange={(e) => setDescripcionEvento(e.target.value)}
                        />
                      </InputGroup>
                      <Button variant="dark" onClick={crearEvento}>
                        Crear nuevo evento
                      </Button>
                      <p>{feedback}</p>
                      <Card.Title className="nunito margins">
                        <strong>Eliminar evento:</strong>
                      </Card.Title>
                      <InputGroup size="md" className="mb-3">
                        <FormControl
                          type="text"
                          value={codeBorrar}
                          placeholder={"Código del evento"}
                          onChange={(e) => setCodeBorrar(e.target.value)}
                        />
                      </InputGroup>
                      <Button variant="dark" onClick={borrarEvento}>
                        Eliminar evento
                      </Button>
                      <p>{feedbackDel}</p>
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

export default AdminGestion;
