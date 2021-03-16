const TicketList = require("./TicketList");

class Sockets {
    constructor(io) {

        this.io = io;

        // crear la instancia de nuestro ticketList
        this.ticketList = new TicketList();
        // clients 
        this.socketsEvents();
    }

    socketsEvents() {

        //? On connection
        this.io.on('connection', (socket) => {

            console.log('Cliente conectado');


            socket.on('solicitar-ticket', (payload, callback) => {

                const nuevoTicket = this.ticketList.crearTicket();
                callback(nuevoTicket)
            });

            socket.on('siguient-ticket-trabajar', ({ agente, escritorio }, callback) => {
                const suTicket = this.ticketList.asignarTicket(agente, escritorio);

                callback(suTicket);
                this.io.emit('ticket-asigando',this.ticketList.ultimos13)

            });



        })
    }
}

module.exports = Sockets;