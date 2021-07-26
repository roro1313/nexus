import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Redirect, Link } from "react-router-dom";

function Tarjeta(props) {
  const enlace = () => {
    return <Link to="/admin/edit" />;
  };

  const usuarios = props.resultadoBusqueda.map((user, index) => {
    return (
      <Card className={"usuarios"} key={index} style={{ width: "15rem" }}>
        <Card.Img variant="top" src={user.foto} />
        <Card.Body>
          <Card.Title>
            {user.nombre} {user.apellido}
          </Card.Title>
          <Card.Title>{user.puesto}</Card.Title>
          <Card.Text>{user.departamento}</Card.Text>
          <Card.Text>{user.email}</Card.Text>
          <Card.Text>{user.movil}</Card.Text>
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
