import { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import AdminMenu from "./AdminMenu";

function AdminBorrar(props) {
  let [inputEmail, setInputEmail] = useState("");
  let [borrado, setBorrado] = useState([]);
  let [feedback, setFeedback] = useState("");

  const borrarUser = () => {
    fetch(`${props.url}/admin/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: inputEmail,
      }),
      credentials: "include",
    }).then((res) =>
      res.json().then((data) => {
        setBorrado(data.respuesta);
        setFeedback(data.mensaje);
        setInputEmail("");
      })
    );
  };

  return (
    <>
      <Container className={"user"}>
        <Row>
          <Col xs sm md={1} lg xl={4}>
            <AdminMenu loginData={props.loginData} />
          </Col>
          <Col xs sm md lg xl={8}>
            <Card style={{ width: "40rem" }}>
              <Card.Body>
                <Card.Text>
                  <Container>
                    <Row>
                      <Col xs sm md lg xl={8}>
                        <Card.Title>Borrar usuarios:</Card.Title>
                        <p>Introduce un email para eliminar usuarios.</p>
                        <InputGroup size="md" className="mb-3">
                          <FormControl
                            type="text"
                            value={inputEmail}
                            placeholder={"email"}
                            onChange={(e) => setInputEmail(e.target.value)}
                          />
                        </InputGroup>
                        <Button variant="dark" onClick={borrarUser}>
                          Borrar usuario
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

export default AdminBorrar;
