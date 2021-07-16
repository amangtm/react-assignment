import React, { useContext } from 'react'
import Header from '../component/Header';
import SearchFilterWrapper from '../component/SearchFilterWrapper';
import CardList from '../component/CardList';
import { StateContext } from '../component/Store';


function HomePage(){
   
        return < >   
         <Header />
         <SearchFilterWrapper  />
         <CardList/>
        </>
}

export default HomePage;