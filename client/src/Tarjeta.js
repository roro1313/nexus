import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";

function Tarjeta(props) {
  const enlace = () => {
    return <Redirect to="/admin/edit" />;
  };

  const usuarios = props.resultadoBusqueda.map((user, index) => {
    return (
      <Card key={index}>
        <Card.Img variant="top" src={user.foto} />
        <Card.Body>
          <Card.Title>{user.nombre}</Card.Title>
          <Card.Title>{user.apellido}</Card.Title>
          <Card.Text>
            {user.puesto} {user.departamento}
          </Card.Text>
          <Card.Text></Card.Text>
          {/* <Button onClick={enlace}>Editar usuario</Button> */}
        </Card.Body>
      </Card>
    );
  });

  return (
    <>
      <Container>
        <Row>{usuarios}</Row>
      </Container>
    </>
  );
}

export default Tarjeta;
