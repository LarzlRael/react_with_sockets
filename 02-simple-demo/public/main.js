
    const socket = io('https://react-chat-nodejs.herokuapp.com/');

    // refs to the form items
    const formulario = document.querySelector('#miFormulario');
    const messages = document.querySelector('#misMensajes');
    const textMensaje = document.querySelector('#txtMensaje');

        formulario.addEventListener('submit', (e) => {
        e.preventDefault();

            const newMessage = textMensaje.value;
            socket.emit('message-to-server', {
        text: newMessage
            });

            textMensaje.value = "";

        })

        socket.on('message-from-server', (data) => {

        messages.innerHTML += `<li>${data.text}</li>`
    })



        // socket.on('wellcome_message', (data) => {
        //     console.log(data)
        // });

        // setTimeout(() => {
        //     // emit event
        //     socket.emit('client_message', {
        //         msg: 'I am a client',
        //         name: 'Rey'
        //     })
        // }, 2000);

