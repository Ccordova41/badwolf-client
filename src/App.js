import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Navbar from './components/Navbar'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div className="routes">
            <Navbar />
            <Switch>
              <Route exacr path="/" component={Home} />
            </Switch>
          </div>
        </Router> 
      </div>
    );
  }
}

export default App;
