import Card from "react-bootstrap/Card";

function Meeting(props) {
  const eventos = props.meeting.map((evento, index) => {
    return (
      <>
        <Card style={{ width: "20rem" }}>
          <Card.Body>
            <Card.Title>{evento.nombre}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {evento.lugar}, {evento.fecha}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              Código de formación: {evento.code}
            </Card.Subtitle>
            <Card.Text>{evento.descripcion}</Card.Text>
            <Card.Link href="#">Inscríbete</Card.Link>
          </Card.Body>
        </Card>
      </>
    );
  });

  return (
    <>
      <div className="centrar">
        <h3>Eventos disponibles:</h3>
      </div>
      <div className="flex">{eventos}</div>
    </>
  );
}

export default Meeting;
