

class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            //TODO Validar el JWT
            // si el token no es valido, desconectar

            //Todo saber que usuario esta activo mediante el UID

            //Todo emitir todos los usuarios conectdos

            //TODO join, uid

            // TODO escuchar cuando el cliente ,anda un mensaje-peresonal

            //TODO disconnect
            //TODO Marcar ne bd que el usuario se desconecto

            //TODO emitar todos los usuarios conectados
            
        
        });
    }


}


module.exports = Sockets;