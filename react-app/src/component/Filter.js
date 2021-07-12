import React, { Component } from 'react'

class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <select value="Filter By Region" >
                    {/* <option value="Filter By Region"  ></option> */}
                    <option value="Africe">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>


                </select>
            </div>
        )
    }
}

export default Filter
