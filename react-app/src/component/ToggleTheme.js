import React from 'react';
import MoonIcon from '../assets/half-moon.png'
class ToggleTheme extends React.Component{
    render(){
        return <div className="toggleTheme" >
                    <img src={MoonIcon} alt="theme"/>
                    <span> Dark Mode</span>
                </div>
        
    }
}

export default ToggleTheme; 