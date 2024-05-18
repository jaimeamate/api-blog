// Creación y configuración de la APP de Express
const express = require('express');
// const cors = require('cors');

const app = express();
app.use(express.json());
// app.use(cors());

// Configuración de rutas
app.use('/api',require('./routes/api'))

app.use((error, req,res,next) => {
    res.status(500).json({error: error.message})
})


module.exports = app;