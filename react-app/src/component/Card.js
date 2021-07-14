import React, { Component } from 'react'
import StaticFlag from '../assets/india-flag.jpeg'
import { Link } from 'react-router-dom';
class Card extends Component {
    render(props) {
        const {flagUrl,countryName,population,region,capital}=this.props;
        const linkStyle ={
            textDecoration:"none",
            color:'black'
        }
        return (
            
           
                <div className="card" >
                    <Link to={`/detail/${countryName}`} style={linkStyle}>
                        <img src={flagUrl}/>
                        <h2>{countryName}</h2>
                        <div className="country-details">Population: <span>{population}</span></div>
                        <div className="country-details">Regions: <span>{region}</span></div>
                        <div className="country-details">Capital: <span>{capital}</span></div>
                    </Link> 
               </div>

            
        )
    }
}

export default Card
