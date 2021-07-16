import React, { useContext } from 'react'
import StaticFlag from '../assets/india-flag.jpeg'
import { StateContext } from './Store';

function CardDetailWrapper(props) {
    // console.log(props)
    const { flagUrl, countryName, nativeName, population, region, subRegion, capital, topLevelDomain, currencies, languages, borderCountries } = props;
    const [state, dispatch] = useContext(StateContext)

    return (
        <div className="card-detail-wrapper" >
            <img src={flagUrl} />
            <div className="detail-wrapper">
                <h1>{countryName}</h1>
                <div className="detail-col">
                    <div className="detail-col1">
                        <div className="detail-row">
                            <h4 className="detail-sub-heading">Native Name:</h4>
                            <span style={{ color: state.theme.input }}>{nativeName}</span>
                        </div>
                        <div className="detail-row">
                            <h4 className="detail-sub-heading">Population:</h4>
                            <span style={{ color: state.theme.input }}>{population}</span>
                        </div>
                        <div className="detail-row">
                            <h4 className="detail-sub-heading" >Region:</h4>
                            <span style={{ color: state.theme.input }}>{region}</span>
                        </div>
                        <div className="detail-row">
                            <h4 className="detail-sub-heading">Sub-region:</h4>
                            <span style={{ color: state.theme.input }}>{subRegion}</span>
                        </div>
                        <div className="detail-row">
                            <h4 className="detail-sub-heading">Capital:</h4>
                            <span style={{ color: state.theme.input }}>{capital}</span>
                        </div>



                    </div>
                    <div className="detail-col2">
                        <div className="detail-row">
                            <h4 className="detail-sub-heading">Top Level Domain:</h4>
                            {topLevelDomain.map((domain, index) => {
                                return <span key={index} style={{ color: state.theme.input }}>{domain}</span>
                            })}
                        </div>
                        <div className="detail-row">
                            <h4 className="detail-sub-heading">Currencies:</h4>
                            {currencies.map((currency, index) => {
                                return <span key={index} style={{ color: state.theme.input }}>{currency.name}</span>
                            })}
                        </div>
                        <div className="detail-row">
                            <h4 className="detail-sub-heading">Languages:</h4>
                            {languages.map((lang, index) => {
                                return <span key={index} style={{ color: state.theme.input }}>{lang.name}</span>
                            })}
                        </div>
                    </div>


                </div>

                <div className="detail-clickable-row">
                    <h4>Border Countries: </h4>
                    <div className="border-country-list">
                        {borderCountries.map((name, index) => {
                            return <button key={index} id={name} style={{ color: state.theme.input, backgroundColor: state.theme.element }}>{name}</button>
                        })}
                    </div>


                </div>
            </div>
        </div>
    )

}

export default CardDetailWrapper
