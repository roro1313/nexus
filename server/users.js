const express = require("express");
const router = express.Router();

router.post("/create", function (req, res) {
    //Esta ruta será /admin/create
    // Aqui es recomendable añadir la encriptación del password con BCrypt
    req.app.locals.db.collection("users")
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
  });

router.get("/user", function (req, res) {
    if (req.isAuthenticated()) {
        req.app.locals.db.collection("users")
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
  });


module.exports = router;