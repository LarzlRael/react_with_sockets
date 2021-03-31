import React from 'react'
import { SearchBox } from './SearchBox';
import { SidebarChatItem } from './SidebarChat'

export const SideBar = () => {

    const chats = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (

        <div className="inbox_people">

            <SearchBox />

            {/* <!-- Sidebar inicio --> */}
            <div className="inbox_chat">

                {
                    chats.map((chat) => (
                        <SidebarChatItem key={chat} />
                    ))
                }

                {/* <!-- Espacio extra para scroll --> */}
                <div className="extra_space"></div>


            </div>
            {/* <!-- Sidebar Fin --> */}

        </div>

    )
}
