import React from 'react';
import DarkModeButton from './DarkModeButton';

class Header extends React.Component{
    render(){
        return <div className="header">
                    <h2 >Where in the World?</h2>
                    <DarkModeButton />        
                </div>
    }
}

export default Header;