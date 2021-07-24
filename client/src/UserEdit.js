import { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import UserMenu from "./UserMenu";

function UserEdit(props) {
  let [inputNombre, setInputNombre] = useState("");
  let [inputApellido, setInputApellido] = useState("");
  let [inputFoto, setInputFoto] = useState("");
  let [userEdit, setUserEdit] = useState({});

  const editarUser = () => {
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
      .then((data) => {setUserEdit(data) ; setInputNombre(""); setInputApellido("")});
  };

  const editarFoto = () => {
    fetch("http:localhost:3001/user/editFoto", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: props.loginData.user.email,
        foto: inputFoto,
      }),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {setUserEdit(data) ; setInputFoto("")});
  };

  return (
    <>
      <Container className={"user"}>
        <Row>
        <Col xs sm md lg xl={4}>
        <UserMenu loginData={props.loginData} />
          </Col>
          <Col xs sm md lg xl={8}>
            <Card style={{ width: "40rem" }}>
              <Card.Body>
                <Card.Text>
                  <Container>
                    <Row>
                      <Col xs sm md lg xl={8}>
                        <Card.Title>Modifica tus datos:</Card.Title>
                        <p>Introduce los nuevos datos y guárdalos.</p>
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
                        <Button variant="dark" onClick={editarUser}>
                          Guardar cambios
                        </Button>
                        <p>{userEdit.mensaje}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs sm md lg xl={8}>
                        <Card.Title>Modifica tu foto:</Card.Title>
                        <p>Introduce la URL de tu nueva foto.</p>
                        <InputGroup size="md" className="mb-3">
                          <FormControl
                            type="text"
                            value={inputFoto}
                            placeholder={"Introduce la URL de la imagen"}
                            onChange={(e) => setInputFoto(e.target.value)}
                          />
                        </InputGroup>
                        <Button variant="dark" onClick={editarFoto}>
                          Cambiar foto
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
