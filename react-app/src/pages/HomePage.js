import React from 'react'
import Header from '../component/Header';
import SearchFilterWrapper from '../component/SearchFilterWrapper';
import CardList from '../component/CardList';
class HomePage extends React.Component{
    render(){
        return <>   
         <Header/>
         <SearchFilterWrapper/>
         <CardList/>
        </>
    }
}

export default HomePage;