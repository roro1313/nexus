import Card from "react-bootstrap/Card";

function Training(props) {
  const formaciones = props.training.map((formacion, index) => {
    return (
      <>
        <Card style={{ width: "20rem" }}>
          <Card.Body>
            <Card.Title>{formacion.nombre}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {formacion.lugar}, {formacion.fecha}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              Código de formación: {formacion.code}
            </Card.Subtitle>
            <Card.Text>{formacion.descripcion}</Card.Text>
            <Card.Text>{formacion.asistentes}</Card.Text>
            <Card.Link href="#">Inscríbete</Card.Link>
          </Card.Body>
        </Card>
      </>
    );
  });

  return (
    <>
      <div className="centrar">
        <h3>Formaciones disponibles:</h3>
      </div>
      <div className="flex">{formaciones}</div>
    </>
  );
}

export default Training;
