import React, { useContext, useState } from 'react'
import { SocketContext } from '../context/SocketContext';

export const BanddAdd = () => {

    const [valor, setValor] = useState('');
    const { socket } = useContext(SocketContext);

    const onSubmit = (ev) => {

        ev.preventDefault();

        if (valor.trim().length > 0) {

            // TODO call the function to emit the event

            socket.emit('nueva-banda', { newName: valor });

            setValor('');
        }
    }

    return (
        <>
            <h3>Agregar Banda</h3>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="nombre de la banda"
                    className="form-control"
                    value={valor}
                    onChange={(ev) => setValor(ev.target.value)}
                />
            </form>
        </>
    )
}
