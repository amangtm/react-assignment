import React,{useContext} from 'react'
import Search from './Search'
import Filter from './Filter'
import { StateContext } from './Store'

function SearchFilterWrapper(){
    const [state, dispatch]=useContext(StateContext)
    const styles={
        background:state.theme.background
    }
        return (
            <div className="search-filter-wrapper" > 
                <Search/>
                <Filter/>
            </div>
        )
}

export default SearchFilterWrapper
