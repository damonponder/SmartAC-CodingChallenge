import React, { Component } from 'react';
import './App.css';
import {Switch, Route, Router} from 'react-router-dom';
import history from "../src/Utils/history";
import Home from './Pages/Home/Home'
import AboutTexas from './Pages/About/About';
import Facts from './Pages/Facts/Facts';




export default class App extends Component {
  render () {
    return(
      <Router history={history}>
        <Switch>
        <div className="App">
          <Route exact path="/" component={Home}/>
          <Route exact path="/About" component={AboutTexas} />
          <Route exact path="/Facts" component={Facts} />
        </div>
        </Switch>
      </Router>

    );
  }
}


