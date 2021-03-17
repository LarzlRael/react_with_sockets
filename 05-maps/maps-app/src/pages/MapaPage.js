import React, { useEffect } from 'react'
import { useMapBox } from '../hooks/useMapBox';




const initialPoint = {
    lng: -122.4725,
    lat: 37.8010,
    zoom: 10
}

const MapaPage = () => {


    const { setRef, coords, nuevoMarcador$,
        movimientoMarcador$ } = useMapBox(initialPoint);

    useEffect(() => {

        nuevoMarcador$.subscribe(marcador => {
            // console.log('Mapa page')
            // console.log(marcador);

        })

    }, [nuevoMarcador$]);

    useEffect(() => {

        movimientoMarcador$.subscribe(marcador => {
            // console.log('Mapa page')
            // console.log(marcador.id);

        })

    }, [movimientoMarcador$]);


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
