

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
        // inicializar Sockets
        this.sockets = new Sockets(this.io);

    }


    middlewares() {
        //CORS
        this.app.use(cors());

        // public dir 
        this.app.use(express.static(path.resolve(__dirname, '../public')));

        // get de los ultimos tickets
        this.app.get('/ultimos', (req, res) => {
            res.json({
                ok: true,
                ultimos: this.sockets.ticketList.ultimos13
            })
        })
    }



    execute() {

        //? inizializar Middlwares
        this.middlewares();


        // inizizaliar Seerver
        this.server.listen(this.port, () => {
            console.log(`Server on port http://localhost:${this.port}`);

        })
    }

}


module.exports = Server;