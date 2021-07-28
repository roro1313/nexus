import AdminMenu from "./AdminMenu";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Footer from "./Footer";

function Admin(props) {
  if (props.loginData.user.admin) {
    return (
      <>
        <Container /* className={"user"} */>
          <Row xs sm md lg xl={12}>
            <Col xs={12} sm={12} md={12} lg xl={4}>
              <AdminMenu loginData={props.loginData} />
            </Col>
            <Col xs={12} sm={12} md={12} lg xl={8}>
              {/* <Card style={{ width: "40rem" }}> */}
                <Card.Body>
                  <Card.Title className="nunito"><strong>Datos del perfil:</strong></Card.Title>
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
              {/* </Card> */}
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    );
  } else {
    return <h1>No tienes permisos de administrador, inicia sesión</h1>;
  }
}

export default Admin;
