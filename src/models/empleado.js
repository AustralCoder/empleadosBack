const mongoose = require('mongoose');
const validator = require('validator');

const empleadoSchema = new mongoose.Schema({

    nombre: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
    },

    numero: {
        type: String,
        required: true
    },

    dni: {
        type: String,
        required: true
    },

    direccion: {
        type: String,
        required: true
    },

    ocupacion: {
        type: String,
        required: true
    }




})

const empleado = new mongoose.model('empleado',empleadoSchema);

module.exports = empleado;