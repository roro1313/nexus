import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { Link } from "react-router-dom";


function UserMenu(props) {
  return (
    <Card className={"card nunito"} style={{ width: "20rem" }}>
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
          <Link to="/user/find">Búsqueda segmentada</Link>
        </ListGroupItem>
        <ListGroupItem>
          <Link to="/user/training">Gestión formaciones / eventos</Link>
        </ListGroupItem>
      </ListGroup>
      <Card.Body className="list-group-item-dark">
        <Link to="/logout">Cerrar sesión</Link>
      </Card.Body>
    </Card>
  );
}

export default UserMenu