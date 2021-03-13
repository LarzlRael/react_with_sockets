
const Server = require('./models/server');

require('dotenv').config();

const server = new Server();

server.execute();







// io.on('connection', (socket) => {

//     // socket.emit('wellcome_message', {
//     //     msg: 'wellcome to server',
//     //     date: new Date()
//     // });


//     socket.on('client_message', (payload) => {
//         console.log(payload);
//     });

//     socket.on('message-to-server', (data) => {
//         console.log(data);

//         //? emit message only one cliente
//         //? socket.emit('message-from-server',data);

//         //* emit message all clientes
//         io.emit('message-from-server', data);


//     });
// })

