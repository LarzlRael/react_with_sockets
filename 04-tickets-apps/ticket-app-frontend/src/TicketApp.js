import React from 'react'
import "antd/dist/antd.css";

import { SocketProvider } from './context/SocketContext';
import { UIProvider } from './context/UIContest';
import { RouterPages } from './pages/RouterPages'

export const TicketApp = () => {
    return (
        <SocketProvider>
            <UIProvider>
                <RouterPages />
            </UIProvider>
        </SocketProvider>
    )
}
