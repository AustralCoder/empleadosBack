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
        unique: [true, "este email ya existe"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("este email no es valido");
            }
        }
    },

    numero: {
        type: Number,
        required: true,
        min: 8
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