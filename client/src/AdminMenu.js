import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";


function AdminMenu(props){
    return(
        <Card className={"card"} style={{ width: "20rem" }}>
                {/* <Card.Img variant="top" src={props.loginData.user.foto} /> */}
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
                  <ListGroupItem>
                    <Link to="/admin/inscripcion">Inscribirse</Link>
                  </ListGroupItem>
                </ListGroup>
                <Card.Body className="list-group-item-dark">
                  <Link to="/logout">Cerrar sesión</Link>
                </Card.Body>
              </Card>
    )
}
export default AdminMenu;