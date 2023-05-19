const express = require('express')
const InscripcionSchema = require('../models/inscripcion')
const router = express.Router()


//Get
router.get('/', async (req, res) => {
    try {
        const inscripcion = await InscripcionSchema.find()
        res.json({
            "message": "Inscripciones encontradas",
            "data": inscripcion
        })
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})


//Create
router.post('/', async (req, res) => {
    console.log(req.body)
    try {
        const inscripcion = new InscripcionSchema(req.body)
        await inscripcion.save()
        res.status(201).json({
            "message": "Inscripcion creada",
            "data": inscripcion
        })
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//Update
router.patch('/:id', async (req, res) => {
    try {
        const inscripcion = await InscripcionSchema.findById(req.params.id)

        Object.keys(req.body).forEach(key => {
            inscripcion[key] = req.body[key]
        })

        await inscripcion.save()
        res.json({
            "message": "Inscripcion actualizada",
            "data": inscripcion
        })
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//Delete
router.delete('/:id', async (req, res) => {
    try {
        const inscripcion = await InscripcionSchema.deleteOne({ _id: req.params.id })
        res.json({
            "message": "Inscripcion eliminada", 
            "data": inscripcion
        })
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router