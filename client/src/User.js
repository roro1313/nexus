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
            <Card style={{ width: "22rem" }}>
              <Card.Img
                variant="top"
                src="data:image/jpeg;base64,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"
              />
              <Card.Body>
                <Card.Title>¡Hola, user!</Card.Title>
                <Card.Text>
                  Estás en tu perfil, aquí puedes consultar tu información y
                  modificarla. Selecciona la opción que quieras utilizar: 
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  <Card.Link href="/user/edit">
                    Editar datos de perfil
                  </Card.Link>
                </ListGroupItem>
                <ListGroupItem>
                  <Card.Link href="/user/training">
                    Formaciones disponibles
                  </Card.Link>
                </ListGroupItem>
                <ListGroupItem>
                  <Card.Link href="/user/meeting">Eventos disponibles</Card.Link>
                </ListGroupItem>
              </ListGroup>
              <Card.Body className="list-group-item-dark">
                <Card.Link href="#">Cerrar sesión</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col xs sm md lg xl={8}>
            <Card style={{ width: "50rem" }}>
              <Card.Body>
                <Card.Title>Datos del perfil:</Card.Title>
                <Card.Text>
                  <h6>Nombre:</h6>
                  <p>Nombre completo</p>
                  <h6>Apellidos:</h6>
                  <p>Apellido1 Apellido2</p>
                  <h6>Sede / oficina:</h6>
                  <p>Madrid</p>
                  <h6>Departamento:</h6>
                  <p>Gerencia</p>
                  <h6>Puesto:</h6>
                  <p>Gerente de compras</p>
                  <h6>Teléfono:</h6>
                  <p>000 000 000</p>
                  <h6>Email:</h6>
                  <p>email@email.com</p>
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
