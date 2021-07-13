import React, { Component } from 'react'
import StaticFlag from '../assets/india-flag.jpeg'
class CardDetailWrapper extends Component {
    render(props) {
        const {flagUrl,countryName,nativeName,population,region,subRegion,capital,topLevelDomain,currencies,languages,borderCountries}=this.props;
        return (
            <div className="card-detail-wrapper">
                <img src={StaticFlag}/>
                <div className="detail-wrapper">
                    <h1>{countryName}</h1>
                    <div className="detail-col">
                        <div className="detail-col1">
                            <div className="detail-row">
                                <h4 className="detail-sub-heading">Native Name:</h4>
                                <span>{nativeName}</span>
                            </div>
                            <div className="detail-row">
                                <h4 className="detail-sub-heading">Population:</h4>
                                <span>{population}</span>
                            </div>
                            <div className="detail-row">
                                <h4 className="detail-sub-heading" >Region:</h4>
                                <span>{region}</span>
                            </div>
                            <div className="detail-row">
                                <h4 className="detail-sub-heading">Sub-region:</h4>
                                <span>{subRegion}</span>
                            </div>
                            <div className="detail-row">
                                <h4 className="detail-sub-heading">Capital:</h4>
                                <span>{capital}</span>
                            </div>
                            
                            
                        
                        </div>
                        <div className="detail-col2">
                        <div className="detail-row">
                            <h4 className="detail-sub-heading">Top Level Domain:</h4>
                            <span>{topLevelDomain}</span>
                        </div>
                        <div className="detail-row">
                            <h4 className="detail-sub-heading">Currencies:</h4>
                            {currencies.map(currency=> {
                                return <span>{currency}</span>
                            })}  
                        </div>
                        <div className="detail-row">
                            <h4 className="detail-sub-heading">Languages:</h4>
                            {languages.map(lang=> {
                                return <span>{lang}</span>
                            })} 
                        </div>
                        

                        

                       
                    </div>
                   

                    </div>
                    
                    <div className="detail-clickable-row">
                        <h4>Border Countries: </h4>
                        <div className="border-country-list">
                            {borderCountries.map(name =>{
                                return  <button id={name}>{name}</button>
                            })}   
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default CardDetailWrapper
