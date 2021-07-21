import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

function Admin(props) {
  if (props.loginData.user.admin) {
    return (
      <>
        <Container className={"user"}>
          <Row>
          <Col xs sm md lg xl={4}>
              <Card className={"card"} style={{ width: "20rem" }}>
                <Card.Img variant="top" src={props.loginData.user.foto} />
                <Card.Body>
                  <Card.Title>Admin</Card.Title>
                  <Card.Text>
                    Estás en el perfil de administrador. Desde aquí puedes crear
                    usuarios, editar usuarios y borrar usuarios.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    <Link to="/admin/find">Buscar usuarios</Link>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Link to="/admin/create">Crear usuarios</Link>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Link to="/admin/edit">Editar usuarios</Link>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Link to="/admin/delete">Eliminar usuarios</Link>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Link to="/admin/training">Formaciones disponibles</Link>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Link to="/admin/meeting">Eventos disponibles</Link>
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
                    <p>
                      <strong>Nombre:</strong>
                    </p>
                    <p>{props.loginData.user.nombre}</p>
                    <p>
                      <strong>Apellido:</strong>
                    </p>
                    <p>{props.loginData.user.apellido}</p>
                    <p>
                      <strong>Sede:</strong>
                    </p>
                    <p>{props.loginData.user.sede}</p>
                    <p>
                      <strong>Departamento:</strong>
                    </p>
                    <p>{props.loginData.user.departamento}</p>
                    <p>
                      <strong>Puesto:</strong>
                    </p>
                    <p>{props.loginData.user.puesto}</p>
                    <p>
                      <strong>Teléfono móvil:</strong>
                    </p>
                    <p>{props.loginData.user.telefono}</p>
                    <p>
                      <strong>Email corporativo:</strong>
                    </p>
                    <p>{props.loginData.user.email}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  } else {
    return <h1>No tienes permisos de administrador, inicia sesión</h1>;
  }
}

export default Admin;
