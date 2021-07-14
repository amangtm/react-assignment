import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import Store from './component/Store';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      
      <Store>
        <Router>
          <Switch>
            <Route exact path="/">
                <HomePage/>
            </Route>
            <Route path="/detail">
                <DetailPage/>
            </Route>
          </Switch>
        </Router>
      </Store>
       
    </div>
  );
}

export default App;
