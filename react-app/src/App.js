import React from 'react';
import './App.css';
import Header from './component/Header'
import SearchFilterWrapper from './component/SearchFilterWrapper';
import CardList from './component/CardList';

function App() {
  return (
    <div className="App">
        <Header/>
        <SearchFilterWrapper/>
        <CardList/>
    </div>
  );
}

export default App;
