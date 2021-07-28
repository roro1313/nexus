import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/esm/Card";
import Footer from "./Footer";

function Inicio(props) {
  return (
    <>
      <Jumbotron className="jumbotron fondo">
        <h1 className="gris ubuntu">nexus</h1>
        <h3 className="gris nunito">gestión efectiva de tu</h3>
        <h3 className="gris nunito">relación con la plantilla</h3>
        <p>
          <Button size="lg" className="boton2 gris nunito" variant="dark">
            Te mostramos cómo
          </Button>
        </p>
      </Jumbotron>
      <Container>
        <h1 className="nunito dark">Todo tu personal, en un único lugar</h1>
        <p>
          El trabajo en remoto supone el 15% del total de la población de
          nuestro país. El contexto pandémico ha propiciado que muchas empresas
          den el salto a esta modalidad de trabajo en el último año, lo que
          supone un <strong>72% de incremento en total.</strong> Según datos
          oficiales, hasta un 39%* de los empleados están experimentando
          alteraciones de su salud mental en este nuevo contexto laboral.
          Podemos evitar estas situaciones,
          <strong>
            impulsando iniciativas que involucren al personal y gestionándolo a
            través de @nexus.
          </strong>
        </p>
        <p>
          Si quieres hacer que tu plantilla se componga de empleados
          satisfechos, sanos, comprometidos y con ganas de liderar nuevos
          proyectos... Apuesta por ellos: formación, eventos, desarrollo
          personal... Estás a un solo paso de conseguir un mundo laboral mejor.
        </p>
      </Container>
      <Container className={"margins"}>
        <Row>
          <Col xs={12} sm={12} md={12} lg={4} xl={4} className="dark">
            <h3 className="nunito dark">Optimización</h3>
            <p>
              Descubre todo el tiempo que puedes ahorrar en gestiones
              innecesarias. Reduce la carga de trabajo administrativo del
              personal.
            </p>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} xl={4} className="dark">
            <h3 className="nunito dark">Engagement</h3>
            <p>
              Mejora el bienestar de tu personal poniéndoles en el centro de
              interés. Comunícate y conseguirás más compromiso.
            </p>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} xl={4} className="dark">
            <h3 className="nunito dark">Desarrollo</h3>
            <p>
              Impulsa el desarrollo colectivo a través de buenas prácticas
              empresariales. Implícate con tus trabajadores y movilízales.
            </p>
          </Col>
        </Row>
      </Container>
      <Button className="boton2 gris nunito" variant="dark" size="lg" block>
        solicita ahora tu prueba gratuita de 30 días
      </Button>
      <Container className="user margins">
        <Col xs={12} sm={12} md={12} lg={6} xl={6} className="dark">
          <h3 className="nunito dark">
            Interfaz sencilla y perfiles diferenciados
          </h3>
          <p>
            Solo tendrás que ocuparte de organizar acciones que motiven a tu
            plantilla. La interfaz de la aplicación es muy sencilla y{" "}
            <strong>cualquier usuario con permisos de administrador</strong>{" "}
            puede crear todos los contenidos.
          </p>
          <ul>
            <li>Perfiles diferenciados</li>
            <li>Búsquedas segmentadas</li>
            <li>
              <strong>Gestión de información</strong>
            </li>
            <li>Crea acciones y construye tu comunidad en pocos pasos</li>
          </ul>
        </Col>
        <Col xs={12} sm={12} md={12} lg xl={6} className="dark">
          <i class="fas fa-laptop fa-10x icono user"></i>
        </Col>
      </Container>

      <Container className="user margins">
        <Col xs={12} sm={12} md={12} lg={6} xl={6} className="dark">
          <i class="fas fa-project-diagram fa-10x icono user"></i>
        </Col>
        <Col xs={12} sm={12} md={12} lg={6} xl={6} className="dark">
          <h3 className="nunito dark">Todos estarán conectados</h3>
          <p>
            Gracias a los <strong>perfiles exclusivos para usuarios</strong>,
            todos los usuarios tendrán la posiblidad de ver y gestionar sus
            propios datos, además de inscribirse a todas las acciones que
            deseen.
          </p>
          <ul>
            <li>Perfiles privados individuales</li>
            <li>
              Búsquedas <strong>segmentadas</strong>
            </li>
            <li>Edición y consulta de datos</li>
            <li>Máxima seguridad de la información</li>
          </ul>
        </Col>
      </Container>
      <Footer />
    </>
  );
}

export default Inicio;
