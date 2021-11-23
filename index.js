// const express = require('express');
import express, { response } from "express";
import router from "./routers/index.js";
import db from "./conf/db.js";

import dotenv from "dotenv";
dotenv.config({ path: "variables.env" });

const app = express();

// Conectar la base de datos
db.authenticate()
  .then(() => console.log("Base de datos conectada"))
  .catch((error) => console.log(error));

//Definir puerto
//const port = process.env.PORT || 4000;

//Habilitar pug
app.set("view engine", "pug");

// Obtener el año actual
app.use((req, res, next) => {
  const year = new Date();
  res.locals.actualYear = year.getFullYear();
  res.locals.nombreSitio = "Agencia de Viajes";
  next();
});

// Agregar body parser para leer los datos del form
app.use(express.urlencoded({ extended: true }));

//Definir la carpeta publica
app.use(express.static("public"));

//Agregar Router.
app.use("/", router);

//Puerto y host para la app
const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3000;

app.listen(port, host, () => {
  console.log("El Servidor esta funcionando");
});
