import React, { useContext, useEffect } from 'react'
import { SocketContext } from '../context/SocketContext';
import { useMapBox } from '../hooks/useMapBox';


const initialPoint = {
    lng: -122.4725,
    lat: 37.8010,
    zoom: 10
}

const MapaPage = () => {

    const { socket } = useContext(SocketContext);

    const { coords,
        nuevoMarcador$, movimientoMarcador$,
        agregarMarcador, actualizarMarcador, setRef } = useMapBox(initialPoint);

    // Escuchar los marcadores existentes
    useEffect(() => {
        socket.on('marcadores-activos', (marcadores) => {
            for (const key of Object.keys(marcadores)) {
                agregarMarcador(marcadores[key], key);
            }
        })
        //agregarMarcador(marcadores)
    }, [socket, agregarMarcador])

    // nuevoMarcador
    useEffect(() => {

        nuevoMarcador$.subscribe(marcador => {
            socket.emit('marcador-nuevo', marcador);
        })

    }, [nuevoMarcador$, socket]);

    useEffect(() => {

        movimientoMarcador$.subscribe(marcador => {
            socket.emit('marcador-actualizado', marcador);
        });

    }, [socket, movimientoMarcador$]);

    useEffect(() => {

        socket.on('marcador-nuevo', (marcador) => {
            agregarMarcador(marcador, marcador.id);
        });

    }, [socket, agregarMarcador]);


    //? Mover marcador mediante sockets
    useEffect(() => {

        socket.on('marcador-actualizado', (marcador) => {
            actualizarMarcador(marcador);
        });

    }, [socket, actualizarMarcador]);



    return (
        <>
            <div className="info">
                Lng:{coords.lng} | Lat:{coords.lat} | zoom:{coords.zoom}
            </div>
            <div
                ref={setRef}
                className="mapContainer" ></div>
        </>
    )
}

export default MapaPage
