import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'


class CardList extends Component {
    constructor(props){
        super(props);
        this.state={
            cardData:[]
        }
    }
    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all').then((response) =>{
            this.setState({
                cardData:response.data
            })
            
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    render() { 
        return (
            <div className="card-list">
                {this.state.cardData.map((data) => {
                    return <Card countryName={data.name} flagUrl={data.flag} population={data.population} region={data.region} capital={data.capital}/>
                     })
                }
            </div>
        )
    }
}

export default CardList
