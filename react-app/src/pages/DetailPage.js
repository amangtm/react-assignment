import React, { useContext } from 'react'
import Header from '../component/Header'
import BackButton from '../component/BackButton'
import CardDetailWrapper from '../component/CardDetailWrapper'
import {useParams} from 'react-router-dom'
import { StateContext } from '../component/Store'
function DetailPage(){
        const {countryName}=useParams();
        const [state,dispatch]=useContext(StateContext);
        // console.log(state.countryName)
        const detail=state.countryList.filter(data => (data.name==countryName))
        console.log(detail)
        const {flag,name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages,borders}=detail[0]
       
        // console.log(borders);
        // const borderCountryObject = state.countryList.filter( (data) =>{
        //     console.log(data)
        //     return borders.includes(data.alpha3Code)
        // })
        // console.log(borderCountryObject)
        // const borderNames= borderCountryObject.map(data => data.name)
        return (
            <>
            <Header/>
            <BackButton/>
            <CardDetailWrapper flagUrl={flag} countryName={name} nativeName={nativeName} population={population} region={region} subRegion={subregion} capital={capital} topLevelDomain={topLevelDomain} currencies={currencies} languages={languages}  borderCountries={borders}/>
            </>
        )
}

export default DetailPage

{/* 
    // STATIC DATA 
    <CardDetailWrapper flagUrl="" countryName="India" nativeName="Bharat" population="133,000,000,000"region="Asia" subRegion="East-Asia" capital="Delhi" topLevelDomain=".be" currencies={["INR", "INR1"]} languages={["Hindi", "English"]}  borderCountries={["Pakistan", "Bhutan"]}/>
            </> 
        
*/}