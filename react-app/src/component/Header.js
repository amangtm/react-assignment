import React, { useContext } from 'react'
import DarkModeButton from './DarkModeButton'
import { StateContext } from './Store'

function Header() {
    const [state, dispatch] = useContext(StateContext)
    const HeaderStyle = {
        backgroundColor: state.theme.element
    }
    return <div className="header" style={HeaderStyle}>
        <h2 >Where in the World?</h2>
        <DarkModeButton />
    </div>

}

export default Header
