import Reducer from "./Reducer"
import React,{createContext, useReducer} from 'react'
import { lightTheme } from "./Theme";
const initialState={
    countryList:[],
    error:null,
    theme:lightTheme
}


export const StateContext= createContext(initialState);

const Store=(({children})=>{
    const [state,dispatch]= useReducer(Reducer,initialState);
    return (
        <StateContext.Provider value={[state,dispatch]} >
            {children}
        </StateContext.Provider>
    )
})

export default Store;

