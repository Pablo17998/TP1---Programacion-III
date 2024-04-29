const express = require('express');
const userSchema = require("../userData/appUD.js");
const { Console } = require('console');
const { isErrored } = require('stream');
const crud = express.Router();

// Crear Usuario
crud.post('/users', (req, res) => {
    const client = userSchema(req.body);
    client
        .save()
        .then((data) => res.json({ message: "Se ha Creado un Nuevo Usuario" }))
        .catch((error) => res.json({ message: error }));
});

// Mostrar Todos los Usuarios
crud.get('/users', (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

// Mostrar un Solo Usuario Utilizando el ID
crud.get('/users/:id', (req, res) => {
    const {id} = req.params;
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Actualizar un Usuario Utilizando su ID
crud.put('/users/:id', (req, res) => {
    const {id} = req.params;
    const {nombre, dni, correo, telefono, direccion} = req.body;
    userSchema
        .updateOne({ _id: id }, { $set: { nombre, dni, correo, telefono, direccion } })
        .then((data) => res.json({ message: "Los Datos del Cliente se Actualizaron Correctamente" }))
        .catch((error) => res.json({ message: error }))
});

// Eliminar un Usuario Utilizando su ID
crud.delete('/users/:id', (req, res) => {
    const {id} = req.params;
    userSchema
        .findByIdAndDelete({ _id: id })
        .then((data) => res.json({ message: "El Usuario se ha Eliminado Correctamente" }))
        .catch((error) => res.json({ message: error }))
} )

// Exportacion de Datos
module.exports = crud;
