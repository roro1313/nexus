import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Footer from "./Footer";

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
      <Container className="margins">
        <br />
        <br />
        <br />
        <br />
        <h4 className="nunito margins">{logout.mensaje}</h4>
        <p>
          Recuerda que puedes volver a iniciar sesión en cualquier momento
          accediendo al login desde el menú principal.
        </p>
        <p>
          También puedes consultar las{" "}
          <a href="/about">
            <strong>preguntas frecuentes</strong>
          </a>{" "}
          o vsitar la página de inicio para conseguir más información.
        </p>
        <br />
        <br />
        <br />
        <br />
      </Container>
      <Footer />
    </>
  );
}

export default Logout;
