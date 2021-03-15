import { useContext, useEffect } from 'react'
import { UIContext } from '../context/UIContest'

export const useHideMenu = (ocultar) => {

    const { showMenu, hideMenu } = useContext(UIContext);

    useEffect(() => {
        if (ocultar) {
            hideMenu()
        } else {
            showMenu()
        }


    }, [ocultar, showMenu, hideMenu]);
}


