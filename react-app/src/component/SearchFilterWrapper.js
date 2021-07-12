import React, { Component } from 'react'
import Search from './Search'
import Filter from './Filter'

class SearchFilterWrapper extends Component {
    render() {
        return (
            <div className="search-filter-wrapper">
                <Search/>
                <Filter/>
            </div>
        )
    }
}

export default SearchFilterWrapper
