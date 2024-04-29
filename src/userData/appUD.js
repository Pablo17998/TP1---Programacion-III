const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    nombre: {
        type: String, require: true
    },

    dni: {
        type: Number, require: true
    },

    correo: {
        type: String, require: true
    },

    telefono: {
        type: Number, require: true
    },

    direccion: {
        type: String, require: true
    }
});

module.exports = mongoose.model('Datos', userSchema);