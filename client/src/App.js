import logo from "./logo.svg";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Cabecera from "./Cabecera";
import Login from "./Login";
import User from "./User";
import Training from "./Training";
import Meeting from "./Meeting";
import UserEdit from "./UserEdit";

import "./App.css";

function App() {
  let [inputEmail, setInputEmail] = useState("");
  let [inputPass, setInputPass] = useState("");
  let [loginData, setLoginData] = useState({ logged: false });

  let [training, setTraining] = useState([]);
  let [meeting, setMeeting] = useState([]);

  function login() {
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: inputEmail, password: inputPass }),
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setLoginData(data);
      });
  }
  useEffect(() => {
    fetch("http://localhost:3001/training")
      .then((res) => res.json())
      .then((data) => setTraining(data));
    fetch("http://localhost:3001/meeting")
      .then((res) => res.json())
      .then((data) => setMeeting(data));
  }, []);

  return (
    <BrowserRouter>
      <Route exact path="/">
        <Cabecera />
        <Login
          inputPass={inputPass}
          inputEmail={inputEmail}
          setInputEmail={setInputEmail}
          setInputPass={setInputPass}
          login={login}
          loginData={loginData}
        />
      </Route>
      <Route exact path="/user">
        <Cabecera />
        <User
          training={training}
          setTraining={setTraining}
          meeting={meeting}
          setMeeting={setMeeting}
          loginData={loginData}
        />
      </Route>
      <Route path="/user/edit">
        <Cabecera />
        <UserEdit loginData={loginData} />
      </Route>
      <Route path="/user/training">
        <Cabecera />
        <Training training={training} />
      </Route>
      <Route path="/user/meeting">
        <Cabecera />
        <Meeting meeting={meeting} />
      </Route>
    </BrowserRouter>
  );
}

export default App;
