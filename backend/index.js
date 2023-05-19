const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const fs = require('fs')
const cors = require('cors');


const app = express()
//const port = process.env.PORT || 9000
const port = 9000
const api_key = process.env.MONGODB_KEY



//middleware
app.use(express.json())

app.use((req, res, next) => { 
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Headers', 'content-type'); 
    next(); 
});


//Aceptar peticiones de cualquier origen
app.use(cors());
app.options('*', cors());


app.use('/api', require('./src/routes/inscripcion'))

app.get('/', (req, res) => {
    res.send("Example api register")
})

//MongoDB connection
mongoose.connect(api_key)
    .then(() => {
        console.log("Conectado a la base de datos")
    })
    .catch((error) => {
        console.log(error)
    })
//


app.listen(port, () => {
    console.log("Servidor funcional")
})