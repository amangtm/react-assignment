import axios from 'axios'
import React, { useContext,useEffect } from 'react'
import Card from './Card'

import { StateContext } from './Store'

function CardList() {
    const [state,dispatch]=useContext(StateContext)
    let listData=[];
    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(response =>{
            dispatch({type: 'GET_COUNTRY',payload:response.data})
            listData=response.data;
            // console.log(state.countryList)
        })
        .catch(err =>{
            dispatch({type:'SET_ERROR', payload:err})
        })        
    }, [])
    
    let Cards=<h2>Loading....</h2>
    if(state.countryList==undefined){
        Cards=<h2>Somethign went Wrong: <span>{state.error}</span> </h2>
        return Cards
    }
    return (
        <div className="card-list">
                {state.countryList.map((data,index) => {
                    return <Card key={index} countryName={data.name} flagUrl={data.flag} population={data.population} region={data.region} capital={data.capital}/>
                     })
                }
            </div> 
    )
}

export default CardList


















// import React, {useState,useEffect}from 'react'
// import Reducer from './Reducer'
// import Card from './Card'
// import axios from 'axios';




// function CardList() {
//     // const [countryList,dispatch]=useReducer(Reducer,{countryList:[],error:null})
//     let once=0;
//     let [countryList,setCountryList]=useState([]);
//     useEffect(() => {
//         axios.get('https://restcountries.eu/rest/v2/all')
//         .then(response =>{
//             setCountryList(response.data)
//             console.log(countryList)
//         })
//     },[once])
//     return (
//         <div className="card-list">
//                 {countryList.map((data,index) => {
//                     return <Card key={index} countryName={data.name} flagUrl={data.flag} population={data.population} region={data.region} capital={data.capital}/>
//                      })
//                 }
//             </div>
//     )
// }

// export default CardList


// import React, { Component } from 'react'
// import axios from 'axios'
// import Card from './Card'


// class CardList extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             cardData:[]
//         }
//     }
//     componentDidMount(){
//         axios.get('https://restcountries.eu/rest/v2/all').then((response) =>{
//             this.setState({
//                 cardData:response.data
//             })
            
//         })
//         .catch((err)=>{
//             console.log(err);
//         })
//     }
//     render() { 
//         return (
//             <div className="card-list">
//                 {this.state.cardData.map((data) => {
//                     return <Card countryName={data.name} flagUrl={data.flag} population={data.population} region={data.region} capital={data.capital}/>
//                      })
//                 }
//             </div>
//         )
//     }
// }

// export default CardList
