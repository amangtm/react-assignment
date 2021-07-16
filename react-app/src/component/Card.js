import React, { Component, useContext } from 'react'
import StaticFlag from '../assets/india-flag.jpeg'
import { Link } from 'react-router-dom';
import { StateContext } from './Store';

function Card(props){
        const {flagUrl,countryName,population,region,capital}=props;
        const linkStyle ={
            textDecoration:"none",
            color:'black'
        }
        const [state,dispatch]=useContext(StateContext)
        const CardStyle={
            backgroundColor:state.theme.element,
        }
        return (
            
           
                <div className="card" style={CardStyle}>
                    <Link to={`/detail/${countryName}`} style={linkStyle}>
                        <img src={flagUrl}/>
                        <h2 style={{color:state.theme.text}}>{countryName}</h2>
                        <div className="country-details" style={{color:state.theme.text}}>Population: <span style={{color:state.theme.input}} >{population}</span></div>
                        <div className="country-details" style={{color:state.theme.text}}>Regions: <span style={{color:state.theme.input}}>{region}</span></div>
                        <div className="country-details"style={{color:state.theme.text}} >Capital: <span style={{color:state.theme.input}} >{capital}</span></div>
                    </Link> 
               </div>

            
        )
}

export default Card
