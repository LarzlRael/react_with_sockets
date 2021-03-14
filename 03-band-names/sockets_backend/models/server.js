

// express server
const express = require('express');
// Sockets server
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');
const cors = require('cors');


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8080;

        // http server
        this.server = http.createServer(this.app);

        // sockets settings
        this.io = socketio(this.server, {
            /*  */
        });

    }


    middlewares() {
        // public dir 
        this.app.use(express.static(path.resolve(__dirname, '../public')));

        //CORS
        this.app.use(cors());
    }

    socketssettings() {
        new Sockets(this.io);

    }

    execute() {

        //? inizializar Middlwares
        this.middlewares();

        //? inizializar Sockets
        this.socketssettings()


        // inizizaliar Seerver
        this.server.listen(this.port, () => {
            console.log(`Server on port http://localhost:${this.port}`);

        })
    }

}


module.exports = Server;