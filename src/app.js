const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userData = require("./CRUD/appCRUD.js");
const { ClientSession } = require('mongodb');
const port = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(express.json());
app.use('/api', userData);

//Conexion con MongoDB
mongoose
    .connect(process.env.MongoDB_CNX)
    .then(() => console.log("Conexion Exitosa"))
    .catch(() => console.log("Error al Conectar con el MongoDB"));

app.listen(3000, () => {
    console.log("El Servidor de ha Iniciado en el Puerto " + port);
} );