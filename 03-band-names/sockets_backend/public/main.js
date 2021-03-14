
const socket = io('http://localhost:3000');

socket.on('current-bands', (bands) => {
    console.log(bands);
});