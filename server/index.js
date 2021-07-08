const express = require("express");
const app = express();
require("dotenv").config();
let puerto = process.env.PORT || 3000;

const mongodb = require("mongodb");
let MongoClient = mongodb.MongoClient;
/* let db; */

const users = require("./users")

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  session({
    secret: ["patata", "zanahoria", "rabanos", "secret"],
    resave: false,
    saveUninitialized: false,
    // cookie: { maxAge: 600000 }
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/users", users);

MongoClient.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (error, client) {
    error
      ? console.log("🔴 MongoDb no está conectado")
      : ((app.locals.db = client.db("empresa")), console.log("🟢 MongoDb conectado"));
  }
);

/* ------ USO DE SESIONES ------ */

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      db.collection("users").findOne({ email: email }, function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false);
        }
        if (user.password !== password) {
          return done(null, false);
        }
        return done(null, user);
      });
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.email);
});

passport.deserializeUser(function (email, done) {
  db.collection("users").findOne({ email: email }, function (err, user) {
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null, null);
    }
    return done(null, user); //console.log(user)
  });
});

/* ------ LOGIN ------ */

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/api",
    failureRedirect: "/api/failed",
  })
);

app.all("/api", function (req, res) {
  res.send({ logged: true, mensaje: "Login correcto" });
});

app.all("/api/failed", function (req, res) {
  res.status(401).send({ logged: false, mensaje: "Denegado" });
});

/* ------ LOGOUT ------ */

app.post("/logout", function (req, res) {
  req.logOut();
  res.send({ mensaje: "Sesión cerrada correctamente" });
});

/* ------ RUTAS ------ */

/* app.post("/signup", function (req, res) {
  //Esta ruta será /admin/create
  // Aqui es recomendable añadir la encriptación del password con BCrypt
  db.collection("users")
    .find({ email: req.body.email })
    .toArray(function (err, user) {
      if (user.length === 0) {
        db.collection("users").insertOne(
          {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            foto: req.body.foto,
            puesto: req.body.puesto,
            departamento: req.body.departamento,
            sede: req.body.sede,
            email: req.body.email,
            password: req.body.password,
            movil: req.body.movil,
            meeting: req.body.meeting,
            training: req.body.training,
            vacaciones: req.body.vacaciones,
            docs: req.body.docs,
          },
          function (err, respuesta) {
            if (err !== null) {
              console.log(err);
              res.send({ mensaje: "Ha habido un error: " + err });
            } else {
              res.send({ mensaje: "Datos registrados correctamente" });
            }
          }
        );
      } else {
        res.send({ mensaje: "Usuario ya registrado" });
      }
    });
}); */

app.get("/prueba", function (req, res) {
  req.isAuthenticated()
    ? res.send({ mensaje: "La sesión está iniciada" })
    : res.send({ mensaje: "Sesión no iniciada" });
});

/* app.get("/user", function (req, res) {
  if (req.isAuthenticated()) {
    db.collection("users")
      .find({
        email: req.body.email,
        password: req.body.password,
      })
      .toArray(function (error, datos) {
        error
          ? res.send({ error: true, respuesta: error })
          : res.send({ error: false, respuesta: datos });
      });
  } else {
    res.send({ mensaje: "No se puede acceder a los datos de usuario sin iniciar sesión" });
  }
}); */

app.listen(puerto, (error) => {
  error
    ? console.log("🔴 Servidor no conectado")
    : console.log("🟢 Servidor ready en " + puerto);
});
