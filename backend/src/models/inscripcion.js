const mongoose = require('mongoose')

const InscripcionSchema = mongoose.Schema({
    

    nombre: {type: String,required: true},

    apellido: {type: String,required: true},

    dni: { type: Number, required: true},

    since: { type: Date, required: true},

    email: { type: String, required: true},
    
    phone: { type: Number, required: true},
})


module.exports = mongoose.model('inscripcion', InscripcionSchema)