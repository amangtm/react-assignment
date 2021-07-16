import React,{useState,useEffect,useContext} from 'react'
import { StateContext } from './Store'
import axios from 'axios';
function Search() {
    const [inputText,setInputText]=useState("")
    const [state, dispatch] = useContext(StateContext);
    const SearchStyle={
        backgroundColor: state.theme.element,
        color: state.theme.text

    }
    useEffect(() => {
        
        axios.get(`https://restcountries.eu/rest/v2/name/${inputText}`)
        .then(response =>{
            dispatch({type: 'GET_COUNTRY',payload:response.data})
            // console.log(state.countryList)
        })
        .catch(err =>{
            dispatch({type:'SET_ERROR', payload:err})
        })     
        // console.log(inputText);   
    }, [inputText])
    
    return (
            <div className="search">
                <input type="text" onChange={(event) => setInputText(event.target.value)} value={inputText} name="countries" id="countries" placeholder="Search of a Country...." style={SearchStyle} />
            </div>  
    )
}

export default Search











// import React, { Component } from 'react'

// class Search extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             inputText:""
//         }
//         this.changeHandler=this.changeHandler.bind(this);
//     }
//     changeHandler(event){
//         this.setState({
//             inputText:event.target.value
//         })
//         console.log(this.state.inputText)
//     }

//     render() {
//         return (
//             <div className="search">
//                 <input type="text" onChange={this.changeHandler} value={this.state.inputText} name="countries" id="countries" placeholder="Search of a Country...."/>
//             </div>  
//         )
//     }
// }

// export default Search
