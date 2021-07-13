import React, { Component } from 'react'
import StaticFlag from '../assets/india-flag.jpeg'

class Card extends Component {
    render(props) {
        const {flagUrl,countryName,population,region,capital}=this.props;
        return (
            
            <div className="card">
                <img src={flagUrl}/>
                <h2>{countryName}</h2>
                <div className="country-details">Population: <span>{population}</span></div>
                <div className="country-details">Regions: <span>{region}</span></div>
                <div className="country-details">Capital: <span>{capital}</span></div>
            </div>
        )
    }
}

export default Card
