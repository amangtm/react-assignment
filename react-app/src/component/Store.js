import Reducer from "./Reducer"
import React,{createContext, useReducer} from 'react'
const initialState={
    countyList:[],
    error:null
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

