import { Redirect } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function Login(props) {
  if (props.loginData.logged && props.loginData.user.admin) {
    return <Redirect to="/admin" />;
  } else if (props.loginData.logged && !props.loginData.user.admin) {
    return <Redirect to="/user" />;
  } else {
    return (
      <Container>
        <Row className="justify-content-md-center login">
          <Col xs sm md lg xl={4}>
            <h4>Inicia sesión:</h4>
            <InputGroup size="xs" className="mb-3">
              <FormControl
                value={props.inputEmail}
                placeholder={"email"}
                onChange={(e) => props.setInputEmail(e.target.value)}
              />
            </InputGroup>
            <InputGroup size="xs" className="mb-3">
              <FormControl
                type="password"
                value={props.inputPass}
                placeholder={"contraseña"}
                onChange={(e) => props.setInputPass(e.target.value)}
              />
            </InputGroup>
            <Button variant="primary" onClick={props.login}>
              Login
            </Button>
            <p>{props.loginData.mensaje}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
