import React, { useContext, useState } from 'react'
import LeftArrow from '../assets/left-arrow-back-button.svg'
import {Link} from 'react-router-dom'
import { StateContext } from './Store'
function BackButton() {
    const [state,dispatch]= useContext(StateContext)
        const linkStyle={
            textDecoration:"none",
        }
        const styles={
            background:state.theme.element,
            color:state.theme.text
        }
        
        return (
            <div className="back-button" >
                <Link to="/" style={linkStyle}>
                    <button style={styles}> 
                        <img src={LeftArrow} />
                        <span >Back</span>
                    </button>
                </Link>
                
            </div>
        )
}

export default BackButton
