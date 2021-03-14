const BandList = require("./band-list");



class Sockets {
    constructor(io) {

        this.io = io;
        this.bandList = new BandList();

        // clients 
        this.socketsEvents();
    }

    socketsEvents() {

        //? On connection
        this.io.on('connection', (socket) => {

            console.log('Cliente conectado');

            // emit to conected client , all current bands
            socket.emit('current-bands', this.
                bandList.getBands());

            // vote for the band by id
            socket.on('votar-banda', (id) => {

                this.bandList.increaseVotes(id);

                //? emit to everybody connected
                this.io.emit('current-bands', this.
                    bandList.getBands());
            });

            // borrar una banda
            socket.on('borrar-banda', (id) => {

                this.bandList.removeBand(id);

                //? emit to everybody connected
                this.io.emit('current-bands', this.
                    bandList.getBands());
            });

            socket.on('cambiar-nuevo-nombre', ({ id, newName }) => {

                this.bandList.changeName(id, newName);

                //? emit to everybody connected
                this.io.emit('current-bands', this.
                    bandList.getBands());
            });

            socket.on('nueva-banda', ({ newName }) => {

                this.bandList.addBand(newName);

                //? emit to everybody connected
                this.io.emit('current-bands', this.
                    bandList.getBands());
            });


        })
    }
}

module.exports = Sockets;