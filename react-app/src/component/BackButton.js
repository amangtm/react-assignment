import React, { Component } from 'react'
import LeftArrow from '../assets/left-arrow-back-button.svg'
import {Link} from 'react-router-dom'

export class BackButton extends Component {
    
    render() {
        const linkStyle={
            textDecoration:"none",
        }
        return (
            <div className="back-button">
                <Link to="/" style={linkStyle}>
                    <button> 
                        <img src={LeftArrow}/>
                        <span>Back</span>
                    </button>
                </Link>
                
            </div>
        )
    }
}

export default BackButton
