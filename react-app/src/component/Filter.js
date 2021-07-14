import React,{useContext,useState,useEffect} from 'react'
import { StateContext } from './Store'
import axios from 'axios'

function Filter() {
    const [regionValue, setRegionValue]=useState("")
    const [state,dispatch]=useContext(StateContext)
    useEffect(() => {
        axios.get(`https://restcountries.eu/rest/v2/region/${regionValue}`)
        .then(response =>{
            dispatch({type: 'GET_COUNTRY',payload:response.data})
            // console.log(state.countryList)
        })
        .catch(err =>{
            dispatch({type:'SET_ERROR', payload:err})
        })     
    },[regionValue] )
    // console.log(regionValue);
        return (
            <div className="filter">
                <select onChange={(event) => setRegionValue(event.target.value)} class="filter-select" >
                    <option selected disabled>Filter by Region</option>
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
  
            </div>
        )
}

export default Filter













// import React, { Component, useContext } from 'react'
// class Filter extends Component {
//     render() {
//         return (
//             <div className="filter">
//                 <select active placeholder="Filter by Region">
//                     <option value="Africe">Africa</option>
//                     <option value="America">America</option>
//                     <option value="Asia">Asia</option>
//                     <option value="Europe">Europe</option>
//                     <option value="Oceania">Oceania</option>
//                 </select>
  
//             </div>
//         )
//     }
// }

// export default Filter

//  https://restcountries.eu/rest/v2/region/{region}
