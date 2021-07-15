import logo from "./logo.svg";
import { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Cabecera from "./Cabecera";
import Login from "./Login";

import "./App.css";

function App() {
  let [inputEmail, setInputEmail] = useState("");
  let [inputPass, setInputPass] = useState("");
  let [loginData, setLoginData] = useState({});
  function login() {
    console.log("llamando...")
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: inputEmail, password: inputPass }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoginData(data);
        console.log(data);
      });
  }

  return (
    <>
      <Cabecera />
      <Login
        inputPass={inputPass}
        inputEmail={inputEmail}
        setInputEmail={setInputEmail}
        setInputPass={setInputPass}
        login={login}
      />
    </>
  );
}

export default App;
