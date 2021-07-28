import { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import UserMenu from "./UserMenu";
import Footer from "./Footer";

function UserEdit(props) {
  let [inputNombre, setInputNombre] = useState(props.loginData.user.nombre);
  let [inputApellido, setInputApellido] = useState(
    props.loginData.user.apellido
  );
  let [inputFoto, setInputFoto] = useState(props.loginData.user.foto);
  let [userEdit, setUserEdit] = useState({});
  let [feedbackUser, setFeedbackUser] = useState("");
  let [feedbackFoto, setFeedbackFoto] = useState("");

  const editarUser = () => {
    fetch(`${props.url}/user/edit`, {
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
      .then((data) => {
        setUserEdit(data);
        setInputNombre("");
        setInputApellido("");
        setFeedbackUser(data.mensaje);
      })
      .then(
        fetch(`${props.url}/perfil`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: props.loginData.user.email,
          }),
          credentials: "include",
        })
          .then((res) => res.json())
          .then((data) => {
            props.setLoginData(data);
          })
      );
  };

  const editarFoto = () => {
    fetch(`${props.url}/user/editFoto`, {
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
      .then((data) => {
        setUserEdit(data);
        setInputFoto("");
        setFeedbackFoto(data.mensaje);
      });
  };

  return (
    <>
      <Container /* className={"user"} */>
        <Row>
          <Col xs sm md lg xl={4}>
            <UserMenu loginData={props.loginData} />
          </Col>
          <Col xs sm md lg xl={8}>
            {/* <Card style={{ width: "40rem" }}> */}
            <Card.Body>
              <Card.Text>
                <Container>
                  <Row>
                    <Col xs sm md lg xl={8}>
                      <Card.Title className="nunito">
                        <strong>Modifica tus datos:</strong>
                      </Card.Title>
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
                      <p>{feedbackUser}</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs sm md lg xl={8}>
                      <Card.Title className="nunito">
                        <strong>Modifica tu foto:</strong>
                      </Card.Title>
                      <p>Introduce la URL de tu nueva foto de perfil.</p>
                      <InputGroup size="md" className="mb-3">
                        <FormControl
                          type="text"
                          value={inputFoto}
                          placeholder={"Introduce la URL de la imagen"}
                          onChange={(e) => setInputFoto(e.target.value)}
                        />
                      </InputGroup>
                      <Card.Img
                        className={"imagen"}
                        variant="top"
                        src={inputFoto}
                      />
                      <Button
                        className={"redondo"}
                        variant="dark"
                        onClick={editarFoto}
                      >
                        <i class="far fa-edit"></i>
                      </Button>
                      <p>{feedbackFoto}</p>
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

export default UserEdit;
