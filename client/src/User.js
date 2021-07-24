import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

function User(props) {
  return (
    <>
      <Container className={"user"}>
        <Row>
        <Col xs sm md lg xl={4}>
            <Card className={"card"} style={{ width: "20rem" }}>
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
                  <Link to="/user">Ver datos de perfil</Link>
                </ListGroupItem>
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
            <Card style={{ width: "40rem" }}>
              <Card.Body>
                <Card.Title>Datos del perfil:</Card.Title>
                <Card.Text>
                  <p><strong>Nombre: </strong>{props.loginData.user.nombre}</p>
                  <p><strong>Apellido: </strong>{props.loginData.user.apellido}</p>
                  <p><strong>Sede: </strong>{props.loginData.user.sede}</p>
                  <p><strong>Departamento: </strong>{props.loginData.user.departamento}</p>
                  <p><strong>Puesto: </strong>{props.loginData.user.puesto}</p>
                  <p><strong>Teléfono móvil: </strong>{props.loginData.user.telefono}</p>
                  <p><strong>Email corporativo: </strong>{props.loginData.user.email}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default User;
