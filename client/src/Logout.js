import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Logout(props) {
  let [logout, setLogout] = useState({});

  useEffect(() => {
    fetch("http://localhost:3001/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: props.loginData,
      }),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setLogout(data);
        props.setLoginData("");
      });
  }, []);

  return (
    <>
      <Container>
        <Row>
        <h4>{logout.mensaje}</h4>
        <p>Recuerda que puedes volver a iniciar sesión en cualquier momento para ver y editar tus datos.</p>
        </Row>
      </Container>
    </>
  );
}

export default Logout;
