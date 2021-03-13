


class Sockets {
    constructor(io) {
        this.io = io;

        // clients = 
        this.socketsEvents();
    }

    socketsEvents() {

        //? On connection
        this.io.on('connection', (socket) => {


            //? Listen events
            socket.on('message-to-server', (data) => {
                console.log(data);
                //? emit message only one cliente
                //? socket.emit('message-from-server',data);
                //* emit message all clientes
                this.io.emit('message-from-server', data);

            });
        })
    }
}

module.exports = Sockets;