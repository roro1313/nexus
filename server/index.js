const express = require("express");
const app = express();
require("dotenv").config();
let puerto = process.env.PORT || 3000;

const mongodb = require("mongodb");
let MongoClient = mongodb.MongoClient;
let db;

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
  })
);

app.use(passport.initialize());
app.use(passport.session());

/* ------------------------------------------------------------------------------------------ */
/* ------------------------------------ CONEXIÓN MONGODB ------------------------------------ */
/* ------------------------------------------------------------------------------------------ */

MongoClient.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (error, client) {
    error
      ? console.log("🔴 MongoDb no está conectado")
      : ((db = client.db("empresa")), console.log("🟢 MongoDb conectado"));
  }
);
/* ----------------------------------------------------------------------------------------- */
/* ------------------------------------ USO DE SESIONES ------------------------------------ */
/* ----------------------------------------------------------------------------------------- */

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

passport.serializeUser((user, done) => {
  done(null, user.email);
});

passport.deserializeUser((email, done) => {
  db.collection("users").findOne({ email: email }, (err, user) => {
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null, null);
    }
    return done(null, user); //console.log(user)
  });
});

/* ------------------------------------------------------------------------------- */
/* ------------------------------------ LOGIN ------------------------------------ */
/* ------------------------------------------------------------------------------- */

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/api",
    failureRedirect: "/api/failed",
  })
);

app.all("/api", (req, res) => {
  res.send({ logged: true, mensaje: "Login correcto" });
});

app.all("/api/failed", (req, res) => {
  res.status(401).send({ logged: false, mensaje: "Denegado" });
});

/* -------------------------------------------------------------------------------- */
/* ------------------------------------ LOGOUT ------------------------------------ */
/* -------------------------------------------------------------------------------- */

app.post("/logout", (req, res) => {
  req.logOut();
  res.send({ mensaje: "Sesión cerrada correctamente" });
});

/* ---------------------------------------------------------------------------------------- */
/* ------------------------------------ RUTA DE PRUEBA ------------------------------------ */
/* ---------------------------------------------------------------------------------------- */

app.get("/prueba", (req, res) => {
  req.isAuthenticated()
    ? res.send({ mensaje: "La sesión está iniciada" })
    : res.send({ mensaje: "Sesión no iniciada" });
});

/* --------------------------------------------------------------------------------------------- */
/* ------------------------------------ RUTAS ADMINISTRADOR ------------------------------------ */
/* --------------------------------------------------------------------------------------------- */

//------------------ Rutas de creación, edición y borrado de datos

app.get("/admin", (req, res) => {
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
    res.send({
      mensaje:
        "No se puede acceder a los datos de administrador sin iniciar sesión",
    });
  }
});

app.post("/admin/create", (req, res) => {
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
          function (err, resp) {
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
});

app.put("/admin/edit", (req, res) => {
  db.collection("users").updateOne(
    { email: req.body.email },
    {
      $set: {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        foto: req.body.foto,
        puesto: req.body.puesto,
        departamento: req.body.departamento,
        sede: req.body.sede,
        movil: req.body.movil,
        meeting: req.body.meeting,
        training: req.body.training,
        vacaciones: req.body.vacaciones,
        docs: req.body.docs,
      },
    },
    function (error, datos) {
      error
        ? res.send({ error: true, contenido: error })
        : res.send({
            error: false,
            mensaje: `Se ha modificado ${datos.modifiedCount} registro correctamente`,
            contenido: datos,
          });
    }
  );
});

app.delete("/admin/delete", (req, res) => {
  db.collection("users").deleteOne(
    { email: req.body.email },
    {
      $set: {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        foto: req.body.foto,
        puesto: req.body.puesto,
        departamento: req.body.departamento,
        sede: req.body.sede,
        movil: req.body.movil,
        meeting: req.body.meeting,
        training: req.body.training,
        vacaciones: req.body.vacaciones,
        docs: req.body.docs,
      },
    },
    function (error, datos) {
      error
        ? res.send({ error: true, contenido: error })
        : res.send({
            error: false,
            mensaje: `Se ha eliminado ${datos.deletedCount} registro correctamente`,
            contenido: datos,
          });
    }
  );
});

//------------------ Rutas de consulta de información

app.get("/admin/company", (req, res) => {
  db.collection("users")
    .find()
    .toArray((error, datos) => {
      error
        ? res.send({ error: true, respuesta: error })
        : res.send({ error: false, respuesta: datos });
    });
});

app.post("/admin/user", (req, res) => {
  db.collection("users")
    .find({ email: req.body.email })
    .toArray((error, datos) => {
      error
        ? res.send({ error: true, respuesta: error })
        : res.send({ error: false, respuesta: datos });
    });
});

app.post("/admin/departamento", (req, res) => {
  db.collection("users")
    .find({ departamento: req.body.departamento })
    .toArray((error, datos) => {
      error
        ? res.send({ error: true, respuesta: error })
        : res.send({ error: false, respuesta: datos });
    });
});

app.post("/admin/sede", (req, res) => {
  db.collection("users")
    .find({ sede: req.body.sede })
    .toArray((error, datos) => {
      error
        ? res.send({ error: true, respuesta: error })
        : res.send({ error: false, respuesta: datos });
    });
});

//------------------ Rutas de administración de formaciones:

app.get("/admin/training", (req, res) => {
  db.collection("training")
    .find()
    .toArray((error, datos) => {
      error
        ? res.send({ error: true, respuesta: error })
        : res.send({ error: false, respuesta: datos });
    });
});

app.post("/admin/training/create", (req, res) => {
  db.collection("training")
    .find({ code: req.body.code })
    .toArray((error, data) => {
      if (error) {
        res.send({ error: true, contenido: error });
      } else {
        if (data.length === 1) {
          res.send({
            error: false,
            mensaje: "El código de formación ya existe",
          });
        } else {
          db.collection("training").insertOne(
            {
              nombre: req.body.nombre,
              code: req.body.code,
              descripcion: req.body.descripcion,
              fecha: req.body.fecha,
              lugar: req.body.lugar,
              asistentes: req.body.asistentes,
            },
            function (error, datos) {
              error
                ? res.send({ error: true, contenido: error })
                : res.send({
                    error: false,
                    mensaje: `Se ha creado ${datos.insertedCount} formación correctamente`,
                    contenido: datos,
                  });
            }
          );
        }
      }
    });
});

app.put("/admin/training/edit", (req, res) => {
  db.collection("training").updateOne(
    { code: req.body.code },
    {
      $set: {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        fecha: req.body.fecha,
        lugar: req.body.lugar,
        asistentes: req.body.asistentes,
      },
    },
    function (error, datos) {
      error
        ? res.send({ error: true, contenido: error })
        : res.send({
            error: false,
            mensaje: `Se ha modificado ${datos.modifiedCount} formación correctamente`,
            contenido: datos,
          });
    }
  );
});

app.delete("/admin/training/delete", (req, res) => {
  db.collection("training").deleteOne(
    { code: req.body.code },
    {
      $set: {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        fecha: req.body.fecha,
        lugar: req.body.lugar,
        asistentes: req.body.asistentes,
      },
    },
    function (error, datos) {
      error
        ? res.send({ error: true, contenido: error })
        : res.send({
            error: false,
            mensaje: `Se ha eliminado ${datos.deletedCount} formación correctamente`,
            contenido: datos,
          });
    }
  );
});

//------------------ Rutas de administración de eventos:

app.get("/admin/meeting", (req, res) => {
  db.collection("meeting")
    .find()
    .toArray((error, datos) => {
      error
        ? res.send({ error: true, respuesta: error })
        : res.send({ error: false, respuesta: datos });
    });
});

app.post("/admin/meeting/create", (req, res) => {
  db.collection("meeting")
    .find({ code: req.body.code })
    .toArray((error, data) => {
      if (error) {
        res.send({ error: true, contenido: error });
      } else {
        if (data.length === 1) {
          res.send({
            error: false,
            mensaje: "El código de reunión ya existe",
          });
        } else {
          db.collection("meeting").insertOne(
            {
              nombre: req.body.nombre,
              code: req.body.code,
              descripcion: req.body.descripcion,
              fecha: req.body.fecha,
              lugar: req.body.lugar,
              asistentes: req.body.asistentes,
            },
            function (error, datos) {
              error
                ? res.send({ error: true, contenido: error })
                : res.send({
                    error: false,
                    mensaje: `Se ha creado ${datos.insertedCount} reunión correctamente`,
                    contenido: datos,
                  });
            }
          );
        }
      }
    });
});

app.put("/admin/meeting/edit", (req, res) => {
  db.collection("meeting").updateOne(
    { code: req.body.code },
    {
      $set: {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        fecha: req.body.fecha,
        lugar: req.body.lugar,
        asistentes: req.body.asistentes,
      },
    },
    function (error, datos) {
      error
        ? res.send({ error: true, contenido: error })
        : res.send({
            error: false,
            mensaje: `Se ha modificado ${datos.modifiedCount} reunión correctamente`,
            contenido: datos,
          });
    }
  );
});

app.delete("/admin/meeting/delete", (req, res) => {
  db.collection("meeting").deleteOne(
    { code: req.body.code },
    {
      $set: {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        fecha: req.body.fecha,
        lugar: req.body.lugar,
        asistentes: req.body.asistentes,
      },
    },
    function (error, datos) {
      error
        ? res.send({ error: true, contenido: error })
        : res.send({
            error: false,
            mensaje: `Se ha eliminado ${datos.deletedCount} reunión correctamente`,
            contenido: datos,
          });
    }
  );
});

//------------------ Rutas de administración de vacaciones:

/* --------------------------------------------------------------------------------------------------- */
/* ------------------------------------------ RUTAS USUARIO ------------------------------------------ */
/* --------------------------------------------------------------------------------------------------- */

app.get("/user", (req, res) => {
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
    res.send({
      mensaje: "No se puede acceder a los datos de usuario sin iniciar sesión",
    });
  }
});

app.listen(puerto, (error) => {
  error
    ? console.log("🔴 Servidor no conectado")
    : console.log("🟢 Servidor ready en " + puerto);
});
