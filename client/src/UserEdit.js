import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function UserEdit(props) {
  return (
    <>
      <Container className={"user"}>
        <Row>
          <Col xs sm md lg xl={4}>
            <Card style={{ width: "22rem" }}>
              <Card.Img variant="top" src={props.loginData.user.foto} />
              <Card.Body>
                <Card.Title>¡Hola, {props.loginData.user.nombre}!</Card.Title>
                <Card.Text>
                  Estás en tu perfil, aquí puedes consultar tu información y
                  modificarla. Selecciona la opción que quieras utilizar:
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  <Link to="/user/edit">Editar datos de perfil</Link>
                </ListGroupItem>
                <ListGroupItem>
                  <Link to="/user/training">Formaciones disponibles</Link>
                </ListGroupItem>
                <ListGroupItem>
                  <Link to="/user/meeting">Eventos disponibles</Link>
                </ListGroupItem>
              </ListGroup>
              <Card.Body className="list-group-item-dark">
                <Link to="/logout">Cerrar sesión</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs sm md lg xl={8}>
            <Card style={{ width: "50rem" }}>
              <Card.Body>
                <Card.Text>
                  <Container>
                    {/* Añadir los campos para modificar los datos de usuario y function para enviarlo a /user/edit (PUT) */}
                    <Row>
                      <Col xs sm md lg xl={4}>
                        <h4>Modifica tus datos:</h4>
                        <InputGroup size="md" className="mb-3">
                          <FormControl
                            type="text"
                            value={props.inputPass}
                            placeholder={"nombre"}
                            /* onChange={(e) => props.setInputPass(e.target.value)} */
                          />
                        </InputGroup>
                        <InputGroup size="xs" className="mb-3">
                          <FormControl
                            type="text"
                            value={props.inputPass}
                            placeholder={"apellido"}
                            /* onChange={(e) => props.setInputPass(e.target.value)} */
                          />
                        </InputGroup>
                        <InputGroup size="xs" className="mb-3">
                          <FormControl
                            type="text"
                            value={props.inputPass}
                            placeholder={"Teléfono"}
                            /* onChange={(e) => props.setInputPass(e.target.value)} */
                          />
                        </InputGroup>
                        <InputGroup size="xs" className="mb-3">
                          <FormControl
                            type="text"
                            value={props.inputPass}
                            placeholder={"Email"}
                            /* onChange={(e) => props.setInputPass(e.target.value)} */
                          />
                        </InputGroup>
                        <Button variant="primary" onClick={props.login}>
                          Guardar cambios
                        </Button>
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
