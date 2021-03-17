
import { useRef, useEffect, useState, useCallback } from 'react'
import mapboxgl from 'mapbox-gl';
import { v4 } from 'uuid';
import { Subject } from 'rxjs';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;

export const useMapBox = (initialPoint) => {

    // Referencia el DIV del mapa
    const mapaDiv = useRef();
    const setRef = useCallback((node) => {
        mapaDiv.current = node
    }, [])

    // refs to markers
    const marcadores = useRef({});

    //? Observables de Rxjs
    const movimientoMarcador = useRef(new Subject());
    const nuevoMarcador = useRef(new Subject());

    const mapa = useRef();
    const [coords, setCoords] = useState(initialPoint);


    //? function to add markers

    const agregarMarcador = useCallback((ev) => {
        const { lng, lat } = ev.lngLat;

        const marker = new mapboxgl.Marker();
        marker.id = v4();

        marker
            .setLngLat([lng, lat])
            .addTo(mapa.current)
            .setDraggable(true);

        //? asignamos el objeto de marcadores
        marcadores.current[marker.id] = marker;

        //TODO si el marcador tiene ID no emitir
        nuevoMarcador.current.next({
            id: marker.id,
            lng,
            lat
        });

        // escuchar movimientos del marcador

        marker.on('drag', ({ target }) => {
            const { id } = target;
            const { lng, lat } = target.getLngLat();

            // TODO: emitir los cambios del marcador
            movimientoMarcador.current.next({
                id, lng, lat
            })
        });

    }, []);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapaDiv.current,
            style: 'mapbox://styles/mapbox/streets-v11',

            //? first the lng and befero the lat
            center: [initialPoint.lng, initialPoint.lat],
            zoom: initialPoint.zoom
        });

        mapa.current = map;

    }, [initialPoint]);


    useEffect(() => {

        mapa.current?.on('move', () => {
            const { lng, lat } = mapa.current.getCenter();
            setCoords({
                lng: lng.toFixed(4),
                lat: lat.toFixed(4),
                zoom: mapa.current.getZoom()
            })
        })
    }, []);


    // add the checked when clicked

    useEffect(() => {
        // recibe y envia el mismo argumento y puede reducrise de la siguiente manera
        mapa.current?.on('click', agregarMarcador);

    }, [agregarMarcador]);

    return {
        coords,
        marcadores,
        nuevoMarcador$: nuevoMarcador.current,
        movimientoMarcador$: movimientoMarcador.current,
        setRef,
        agregarMarcador,
    }
}