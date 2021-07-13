import React, { Component } from 'react'
import LeftArrow from '../assets/left-arrow-back-button.svg'

export class BackButton extends Component {
    render() {
        return (
            <div className="back-button">
                <button> 
                    <img src={LeftArrow}/>
                    <span>Back</span>
                    </button>
            </div>
        )
    }
}

export default BackButton
