import React from 'react';
import { createContext } from 'react';
import { useSocket } from '../hooks/useSocket'

export const SocketContext = createContext();

const URL_CONECTION = process.env.REACT_APP_URI_CONNECTION;

export const SocketProvider = ({ children }) => {

    const { socket, online } = useSocket(URL_CONECTION);

    return (
        <SocketContext.Provider value={{ socket, online }}>
            { children }
        </SocketContext.Provider>
    )
}