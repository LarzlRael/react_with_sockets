import React from 'react'
import { SearchBox } from './SearchBox'
import { SideBar } from './SideBar'

export const InboxPeople = () => {
    return (
        <div>
            {/* <!-- Inbox people inicio --> */}
            <SearchBox />

            <SideBar />
            {/* <!-- Inbox people Fin --> */}
        </div>
    )
}
