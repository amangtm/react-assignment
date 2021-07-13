import React, { Component } from 'react'
import Header from '../component/Header'
import BackButton from '../component/BackButton'
import CardDetailWrapper from '../component/CardDetailWrapper'
export class DetailPage extends Component {
    render() {
        return (
            <>
            <Header/>
            <BackButton/>
            <CardDetailWrapper flagUrl="" countryName="India" nativeName="Bharat" population="133,000,000,000"region="Asia" subRegion="East-Asia" capital="Delhi" topLevelDomain=".be" currencies={["INR", "INR1"]} languages={["Hindi", "English"]}  borderCountries={["Pakistan", "Bhutan"]}/>
            </>
        )
    }
}

export default DetailPage
