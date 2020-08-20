import React, { Component } from 'react';
import './App.css';
import {Switch, Route, Router} from 'react-router-dom';
import Home from './Pages/Home/Home'
import About from './Pages/Facts/Facts';
import Facts from './Pages/Facts/Facts';
class App extends Component() {
  render () {
    return(
      <Router>
        <Switch>
        <div className="App">
          <Route exact path="/" component={Home}/>
          <Route exact path="/About" component={About} />
          <Route exact path="/Facts" component={Facts} />
        </div>
        </Switch>
      </Router>

    );
  }
}
export default App;

