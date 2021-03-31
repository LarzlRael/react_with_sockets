import React from 'react'
import { ChatSelected } from '../components/ChatSelected';
import { InboxPeople } from '../components/InboxPeople';
import { Message } from '../components/Message';

import '../css/chat.css';

export const Chatpage = () => {
    return (
        <div className="messaging">
            <div className="inbox_msg">

                <InboxPeople />


                <ChatSelected />
                {/* <Message /> */}

            </div>


        </div>
    )
}
