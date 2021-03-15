import React from 'react'
import "antd/dist/antd.css";

import { RouterPages } from './pages/RouterPages'
import { UIProvider } from './context/UIContest';

export const TicketApp = () => {
    return (
        <UIProvider>
            <RouterPages />
        </UIProvider>
    )
}
