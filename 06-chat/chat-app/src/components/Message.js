import React from 'react'
import { IncomingMessages } from './IncomingMessages'
import { OutgoingMessages } from './OutgoingMessages'
import { SendMessaje } from './SendMessaje'

export const Message = () => {

    const messages = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <div className="mesgs">
            {/* <!-- Chat inicio --> */}

            {/* <!-- Historia inicio --> */}
            <div className="msg_history">

                {messages.map(msg => (
                    (msg % 2) ? <IncomingMessages /> : <OutgoingMessages />
                ))}
                {/* <IncomingMessages />

                <OutgoingMessages /> */}



            </div>
            {/* <!-- Historia Fin --> */}


            <SendMessaje />


            {/* <!-- Chat Fin --> */}
        </div>
    )
}
