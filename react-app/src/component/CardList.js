import React, { Component } from 'react'
import Card from './Card'


class CardList extends Component {
    render() {
        return (
            <div className="card-list">
                <Card countryName="India" population="40,0000,00" region="Asia" capital="Delhi"/>
                <Card countryName="India" population="40,0000,00" region="Asia" capital="Delhi"/>
                <Card countryName="India" population="40,0000,00" region="Asia" capital="Delhi"/>
                <Card countryName="India" population="40,0000,00" region="Asia" capital="Delhi"/>
                <Card countryName="Hindustan" population="40,0000,00" region="Asia" capital="Delhi"/>
                <Card countryName="Bharat" population="40,0000,00" region="Asia" capital="Delhi"/>
                <Card countryName="Bharat" population="40,0000,00" region="Asia" capital="Delhi"/>
            </div>
        )
    }
}

export default CardList
