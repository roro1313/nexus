import AdminMenu from "./AdminMenu";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

function Admin(props) {
  if (props.loginData.user.admin) {
    return (
      <>
        <Container className={"user"}>
          <Row>
            <Col xs sm md lg xl={4}>
              <AdminMenu loginData={props.loginData} />
            </Col>
            <Col xs sm md lg xl={8}>
              <Card style={{ width: "40rem" }}>
                <Card.Body>
                  <Card.Title>Datos del perfil:</Card.Title>
                  <Card.Text>
                    <p>
                      <strong>Nombre: </strong>
                      {props.loginData.user.nombre}
                    </p>
                    <p>
                      <strong>Apellido: </strong>
                      {props.loginData.user.apellido}
                    </p>
                    <p>
                      <strong>Sede: </strong>
                      {props.loginData.user.sede}
                    </p>
                    <p>
                      <strong>Departamento: </strong>
                      {props.loginData.user.departamento}
                    </p>
                    <p>
                      <strong>Puesto: </strong>
                      {props.loginData.user.puesto}
                    </p>
                    <p>
                      <strong>Teléfono móvil: </strong>
                      {props.loginData.user.telefono}
                    </p>
                    <p>
                      <strong>Email corporativo: </strong>
                      {props.loginData.user.email}
                    </p>
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
