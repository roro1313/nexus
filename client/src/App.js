import { useState, useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import Cabecera from "./Cabecera";
import Training from "./Training";
import Meeting from "./Meeting";
import Login from "./Login";
import User from "./User";
import UserEdit from "./UserEdit";
import Admin from "./Admin";
import AdminEdit from "./AdminEdit";
import AdminBuscar from "./AdminBuscar";
import AdminCrear from "./AdminCrear";
import AdminBorrar from "./AdminBorrar";
import AdminInscripcion from "./AdminInscripcion";
import Logout from "./Logout";

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
    <Cabecera loginData={loginData} />
      <Route exact path="/">
              <Login
          inputPass={inputPass}
          inputEmail={inputEmail}
          setInputEmail={setInputEmail}
          setInputPass={setInputPass}
          login={login}
          loginData={loginData}
        />
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
        <User
          training={training}
          setTraining={setTraining}
          meeting={meeting}
          setMeeting={setMeeting}
          loginData={loginData}
        />
      </Route>
      <Route exact path="/user/edit">
        <UserEdit loginData={loginData} setLoginData={setLoginData} />
      </Route>
      <Route exact path="/user/training">
        <Training training={training} />
      </Route>
      <Route exact path="/user/meeting">
        <Meeting meeting={meeting} />
      </Route>
      <Route exact path="/admin">
        <Admin
          training={training}
          setTraining={setTraining}
          meeting={meeting}
          setMeeting={setMeeting}
          loginData={loginData}
        />
      </Route>
      <Route exact path="/admin/edit">
        <AdminEdit loginData={loginData} />
      </Route>
      <Route exact path="/admin/inscripcion">
        {/* <AdminInscripcion loginData={loginData} training={training} /> */}
      </Route>
      <Route exact path="/admin/find">
        <AdminBuscar loginData={loginData} />
      </Route>
      <Route exact path="/admin/create">
        <AdminCrear loginData={loginData} />
      </Route>
      <Route exact path="/admin/delete">
        <AdminBorrar loginData={loginData} />
      </Route>
      <Route exact path="/logout">
        <Logout loginData={loginData} setLoginData={setLoginData} />
      </Route>
    </BrowserRouter>
  );
}

export default App;
