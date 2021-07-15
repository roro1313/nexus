import { useState } from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";



function Login(props) {

  return (
    <Container>
      <Row>
        <Col sm={{order: 1}}></Col>
        <Col sm={{order: 2}}>
          <input className={"inputLogin"}
            type="text"
            value={props.inputEmail}
            placeholder={"email"}
            onChange={(e) => props.setInputEmail(e.target.value)}
          ></input>
        </Col>
        <Col sm={{order: 3}}>
          <input className={"inputLogin"}
            type="text"
            value={props.inputPass}
            placeholder={"contraseña"}
            onChange={(e) => props.setInputPass(e.target.value)}
          ></input>
        </Col>
        <Col sm={{order: 'last'}}>
          <Button variant="primary" onClick={props.login}>
            Login
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
