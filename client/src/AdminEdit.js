import { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

import AdminMenu from "./AdminMenu";

function AdminEdit(props) {
  let [inputNombreEdit, setInputNombreEdit] = useState("");
  let [inputApellidoEdit, setInputApellidoEdit] = useState("");
  let [inputPuestoEdit, setInputPuestoEdit] = useState("");
  let [inputDepartamentoEdit, setInputDepartamentoEdit] = useState("");
  let [inputSedeEdit, setInputSedeEdit] = useState("");
  let [inputMovilEdit, setInputMovilEdit] = useState("");
  let [inputFotoEdit, setInputFotoEdit] = useState("");
  let [inputEmail, setInputEmail] = useState("");
  let [resultadoBusqueda, setResultadoBusqueda] = useState({});
  let [feedback, setFeedback] = useState("");
  let [userEdit, setUserEdit] = useState([]);

  const buscarUser = () => {
    fetch("http://localhost:3001/admin/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: inputEmail,
      }),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setResultadoBusqueda(data.respuesta[0]);
        setFeedback(data.mensaje);
        setInputNombreEdit(data.respuesta[0].nombre);
        setInputApellidoEdit(data.respuesta[0].apellido);
        setInputPuestoEdit(data.respuesta[0].puesto);
        setInputDepartamentoEdit(data.respuesta[0].departamento);
        setInputSedeEdit(data.respuesta[0].sede);
        setInputMovilEdit(data.respuesta[0].movil);
        setInputFotoEdit(data.respuesta[0].foto);

      });
  };

  const editarUser = () => {
    fetch("http://localhost:3001/admin/edit", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: inputEmail,
        nombre: inputNombreEdit,
        apellido: inputApellidoEdit,
        puesto: inputPuestoEdit,
        departamento: inputDepartamentoEdit,
        sede: inputSedeEdit,
        movil: inputMovilEdit,
      }),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setUserEdit(data);
        setInputNombreEdit("");
        setInputApellidoEdit("");
        setInputPuestoEdit("");
        setInputDepartamentoEdit("");
        setInputSedeEdit("");
        setInputMovilEdit("");
      });
  };

  const editarFoto = () => {
    fetch("http:localhost:3001/admin/editFoto", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: resultadoBusqueda.email,
        foto: inputFotoEdit,
      }),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setUserEdit(data);
        setInputFotoEdit("");
      });
  };

  return (
    <>
      <Container className={"user"}>
        <Row>
          <Col xs sm md lg xl={4}>
          <AdminMenu loginData={props.loginData}/>
          </Col>
          <Col xs sm md lg xl={8}>
            <Card style={{ width: "40rem" }}>
              <Card.Body>
                <Card.Text>
                  <Container>
                    <Row>
                      <Col xs sm md lg xl={8}>
                        <Card.Title>Modificar datos:</Card.Title>
                        <p>¿De qué usuario quieres cambiar los datos?</p>
                        <InputGroup size="md" className="mb-3">
                          <FormControl
                            type="text"
                            value={inputEmail}
                            placeholder={"Introduce email del usuario"}
                            onChange={(e) => setInputEmail(e.target.value)}
                          />
                        </InputGroup>
                        <Button variant="dark" onClick={buscarUser}>
                          Buscar usuario
                        </Button>
                        <p>{feedback}</p>
                        <p>Ahora, introduce los nuevos datos y guárdalos.</p>
                        <InputGroup size="md" className="mb-3">
                          <FormControl
                            type="text"
                            value={inputNombreEdit}
                            placeholder={"Nombre"}
                            onChange={(e) => setInputNombreEdit(e.target.value)}
                          />
                        </InputGroup>
                        <InputGroup size="xs" className="mb-3">
                          <FormControl
                            type="text"
                            value={inputApellidoEdit}
                            placeholder={"Apellido"}
                            onChange={(e) =>
                              setInputApellidoEdit(e.target.value)
                            }
                          />
                        </InputGroup>
                        <InputGroup size="xs" className="mb-3">
                          <FormControl
                            type="text"
                            value={inputPuestoEdit}
                            placeholder={"Puesto"}
                            onChange={(e) => setInputPuestoEdit(e.target.value)}
                          />
                        </InputGroup>
                        <InputGroup size="xs" className="mb-3">
                          <FormControl
                            type="text"
                            value={inputDepartamentoEdit}
                            placeholder={"Departamento"}
                            onChange={(e) =>
                              setInputDepartamentoEdit(e.target.value)
                            }
                          />
                        </InputGroup>
                        <InputGroup size="xs" className="mb-3">
                          <FormControl
                            type="text"
                            value={inputSedeEdit}
                            placeholder={"Sede"}
                            onChange={(e) =>
                              setInputSedeEdit(e.target.value)
                            }
                          />
                        </InputGroup>
                        <InputGroup size="xs" className="mb-3">
                          <FormControl
                            type="text"
                            value={inputMovilEdit}
                            placeholder={"Móvil"}
                            onChange={(e) => setInputMovilEdit(e.target.value)}
                          />
                        </InputGroup>
                        <Button variant="dark" onClick={editarUser}>
                          Guardar todos los cambios
                        </Button>
                        <p>{userEdit.mensaje}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs sm md lg xl={8}>
                        <Card.Title>Modificar foto:</Card.Title>
                        <p>Introduce la URL de la nueva foto.</p>
                        <InputGroup size="md" className="mb-3">
                          <FormControl
                            type="text"
                            value={inputFotoEdit}
                            placeholder={"Introduce la URL de la imagen"}
                            onChange={(e) => setInputFotoEdit(e.target.value)}
                          />
                        </InputGroup>
                        <Button variant="dark" onClick={editarFoto}>
                          Cambiar foto
                        </Button>
                        <p>{feedback.mensaje}</p>
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

export default AdminEdit;
