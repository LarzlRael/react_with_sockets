

const Ticket = require('./ticket');

class TicketList {
    constructor() {
        this.ultimoNumero = 0;
        this.pendientes = [];
        this.asignados = [];
    }

    getSiguienteNumero() {
        this.ultimoNumero++;
        return this.ultimoNumero;
    }

    // los 3 que se veran en las tarjetas y 10 en historial

    get ultimos13() {
        // cortar el arreglo
        return this.asignados.slice(0, 13);
    }

    crearTicket() {
        const nuevoTicket = new Ticket(this.getSiguienteNumero());
        this.pendientes.push(nuevoTicket);
        return nuevoTicket;
    }

    asignarTicket(agente, escritorio) {

        // console.log(agente, escritorio);
        // console.log('tickets pendientes: ',this.pendientes);

        if (this.pendientes.length === 0) {
            return null
        };

        const siguienteTicket = this.pendientes.shift();

        siguienteTicket.agente = agente;
        siguienteTicket.escritorio = escritorio;

        this.asignados.unshift(siguienteTicket);

        return siguienteTicket;

    }
}


module.exports = TicketList;
