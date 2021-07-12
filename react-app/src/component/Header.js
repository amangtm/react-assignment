import React from 'react';
import ToggleTheme from './ToggleTheme';

class Header extends React.Component{
    render(){
        return <div className="header">
                    <h2 >Where in the World?</h2>
                    <ToggleTheme />        
                </div>
    }
}

export default Header;