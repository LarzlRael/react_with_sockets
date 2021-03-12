
// express server
const express = require('express');
const app = express();

// Sockets server
const server = require('http').createServer(app);

// settings sockets server
const io = require('socket.io')(server);

const port = process.env.PORT || 3000;


// public dir 

app.use(express.static(__dirname + '/public'));


io.on('connection', () => {
    console.log('client conected');
})

server.listen(port, () => {
    console.log(`Server on port http://localhost:${port}`);
});