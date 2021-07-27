import Col from "react-bootstrap/esm/Col";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/esm/Card";
import Container from "react-bootstrap/esm/Container";
import Footer from "./Footer";

function Expli(props) {
  return (
    <>
      <Container>
        <Col xs sm md lg xl={12} className="dark">
          <h1 className="nunito dark margins">
            Conoce cómo funciona <strong>@nexus:</strong>
          </h1>
          <p>
            Antes de empezar, queremos señalar que lo más importante es que te
            sientas libre de tocar y probar todas las funcionalidades. Si
            encuentras algún problema en el funcionamiento o simplemente te
            apetece contarnos tu opinión, puedes contactarnos. Gracias al
            feedback de todos los usuarios, trabajamos día a día para conseguir
            implementar mejoras.
          </p>
          <p>
            Para no bombardearte con conceptos técnicos, y gracias al feedback
            de los usuarios, hemos preparado estas
            <strong> preguntas frecuentes </strong>para que puedas entender
            todas las funcionalidades.
          </p>
          <h3 className="nunito dark margins">Preguntas frecuentes:</h3>
        </Col>
        <Accordion defaultActiveKey="0" className="margins">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <h5>
                <strong>¿Por dónde puedo empezar?</strong>
              </h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                ¡Muy buena pregunta! Hemos desarrollado esta breve guía para que
                puedas orientarte. Lo ideal es comenzar por definir
                <strong>quiénes tendrán perfil de administración</strong>, para
                poder asignarles los perfiles y comenzar a crear todo el
                contenido.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              <h5>
                <strong>
                  Ya tengo cuenta de administración, ¿y ahora qué?
                </strong>
              </h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                Con la cuenta de administración, you've got the power! Tienes la
                posibilidad de crear todos los contenidos.
                <strong>Explora el menú de la izquierda</strong> para conocer
                todas las opciones que tienes a tu alcance.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              <h5>
                <strong>¿Puedo crear mis propios usuarios?</strong>
              </h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                ¡Por supuesto! Con la cuenta de administración
                <strong>
                  puedes crear tanto usuarios como administradores
                </strong>
                . Para diferenciarlo, no olvides tener en cuenta la casilla de
                verificación que encontrarás justo antes de comenzar a completar
                los datos del perfil. Recuerda que cualquier persona que tenga
                perfil de administrador podrá hacer exactamente las mismas
                acciones que cualquier otro administrador.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              <h5>
                <strong>¿Puedo crear mis propios eventos?</strong>
              </h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                Efectivamente, puedes registrar eventos completando los datos
                correspondientes. Puedes acceder al formulario de creación a
                través del menú de la izquierda.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4">
              <h5>
                <strong>¿Puedo borrar datos?</strong>
              </h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                Sí, puedes borrar todos los datos que necesites. Por ejemplo, si
                una de las cuentas de usuario o administrador no va a ser
                utilizada. También puedes borrar otro tipo de datos como
                eventos.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="5">
              <h5>
                <strong>¿Cómo puedo buscar datos de otros usuarios?</strong>
              </h5>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                Las búsquedas están habilitadas tanto para los perfiles de
                usuario como para los perfiles de administrador. En el menú de
                la izquierda, debes acceder a la opción de búsqueda de usuarios
                para poder ver las distintas opciones de búsqueda. Por el
                momento está disponible la <strong>búsqueda por email, departamento y
                sede.</strong> 
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Col className="margins"><p>Recuerda que, si tienes alguna duda de las que no está aquí contemplada, puedes contactar con nosotros a través de las redes sociales.</p></Col>
      </Container>
      <Footer />
    </>
  );
}

export default Expli;
