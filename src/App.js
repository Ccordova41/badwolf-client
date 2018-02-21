import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { fetchDoctors } from './actions/doctorsAction'
import DoctorsList from './components/doctors/DoctorsList';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.fetchDoctors();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div className="routes">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/doctors" component={DoctorsList} />

            </Switch>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchDoctors }, dispatch)
}

export default connect(null, mapDispatchToProps)(App)
