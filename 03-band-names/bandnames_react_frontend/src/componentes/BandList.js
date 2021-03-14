import React, { useContext, useEffect, useState } from 'react'
import { SocketContext } from '../context/SocketContext';

export const BandList = () => {

    const [bands, setBands] = useState([]);
    const { socket } = useContext(SocketContext);


    useEffect(() => {

        socket.on('current-bands', (bands) => {
            setBands(bands);
        });
        // component will dismount 
        return () => socket.off('current-bands');
    }, [socket])

    const cambioNombre = (e, id) => {
        const nuevoNombre = e.target.value;

        e.preventDefault();

        setBands(bands => bands.map(band => {
            if (band.id === id) {
                band.name = nuevoNombre;
            }
            return band;
        }))
    }

    const onPerdioFoco = (id, nuevoNombre) => {

        socket.emit('cambiar-nuevo-nombre', { id, nuevoNombre });
    }

    const votar = (id) => {

        console.log('votar-app', id);
        socket.emit('votar-banda', id);

    }


    const borrarBanda = (id) => {

        console.log('borrar-app', id);
        socket.emit('borrar-banda', id);

    }

    const crearRows = () => {
        return (
            bands.map(band => (
                <tr key={band.id}>
                    <td>
                        <button
                            className="btn btn-primary"
                            onClick={() => votar(band.id)}
                        >+1</button>
                    </td>
                    <td>
                        <input
                            type="text"
                            className="form-control"
                            value={band.name}
                            onChange={(event) => cambioNombre(event, band.id)}
                            onBlur={() => onPerdioFoco(band.id, band.name)}
                        />
                    </td>
                    <td><h3>{band.votes}</h3></td>
                    <td>
                        <button
                            className="btn btn-danger"
                            onClick={() => borrarBanda(band.id)}
                        >Borrar</button>
                    </td>
                </tr>
            )
            )
        )
    }

    return (
        <>
            <h3>Bandas Actuales</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nombre</th>
                        <th>Votos</th>
                        <th>Borrar</th>
                    </tr>
                    {crearRows()}
                </thead>
            </table>
        </>
    )
}
