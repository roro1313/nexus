import { useState, useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import Inicio from "./Inicio";
import Expli from "./Expli";
import Cabecera from "./Cabecera";
import Footer from "./Footer";
import Training from "./Training";
import Meeting from "./Meeting";
import Login from "./Login";
import User from "./User";
import UserEdit from "./UserEdit";
import UserInscripcion from "./UserInscripcion";
import UserBuscar from "./UserBuscar";
import Admin from "./Admin";
import AdminEdit from "./AdminEdit";
import AdminBuscar from "./AdminBuscar";
import AdminCrear from "./AdminCrear";
import AdminBorrar from "./AdminBorrar";
import AdminInscripcion from "./AdminInscripcion";
import AdminGestion from "./AdminGestion";
import Logout from "./Logout";

function App() {
  const url = "http://localhost:3001";
  let [inputEmail, setInputEmail] = useState("");
  let [inputPass, setInputPass] = useState("");
  let [loginData, setLoginData] = useState({ logged: false });
  let [feedbackEdit, setFeedbackEdit] = useState("");
  let [training, setTraining] = useState([]);
  let [meeting, setMeeting] = useState([]);

  function login() {
    fetch(`${url}/login`, {
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
      <Cabecera loginData={loginData} />
      <Route exact path="/">
        <Inicio loginData={loginData} />
      </Route>
      <Route exact path="/about">
        <Expli />
      </Route>
      <Route exact path="/login">
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
        <User loginData={loginData} />
      </Route>
      <Route exact path="/user/edit">
        <UserEdit loginData={loginData} setLoginData={setLoginData} url={url} />
      </Route>
      <Route exact path="/user/training">
        <UserInscripcion loginData={loginData} url={url} />
      </Route>
      <Route exact path="/user/find">
        <UserBuscar
          loginData={loginData}
          setLoginData={setLoginData}
          url={url}
        />
      </Route>
      <Route exact path="/admin">
        <Admin loginData={loginData} url={url} />
      </Route>
      <Route exact path="/admin/edit">
        <AdminEdit
          loginData={loginData}
          setLoginData={setLoginData}
          url={url}
        />
      </Route>
      <Route exact path="/admin/inscripcion">
        <AdminInscripcion loginData={loginData} url={url} />
      </Route>
      <Route exact path="/admin/gestionEventos">
        <AdminGestion loginData={loginData} url={url} />
      </Route>
      <Route exact path="/admin/find">
        <AdminBuscar
          loginData={loginData}
          setLoginData={setLoginData}
          url={url}
        />
      </Route>
      <Route exact path="/admin/create">
        <AdminCrear
          loginData={loginData}
          setLoginData={setLoginData}
          url={url}
        />
      </Route>
      <Route exact path="/admin/delete">
        <AdminBorrar
          loginData={loginData}
          setLoginData={setLoginData}
          url={url}
        />
      </Route>
      <Route exact path="/logout">
        <Logout loginData={loginData} setLoginData={setLoginData} url={url} />
      </Route>
    </BrowserRouter>
  );
}

export default App;
