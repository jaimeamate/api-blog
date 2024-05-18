// Creación y configuración del SERVER
const http = require('http');
const app = require('./src/app');

// Config .env
require('dotenv').config();

// config db
require('./src/db/db')

// Creación server
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT);

// Listeners
server.on('listening', () => {
    console.log(`Servidor escuchando sobre el puerto ${PORT}`);
});

server.on('error', (error) => {
    console.log(error);
})