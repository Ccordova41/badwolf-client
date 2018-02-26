import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { fetchDoctors } from './actions/doctorsAction'
import { getReports } from './actions/reportsAction'
import DoctorsList from './components/doctors/DoctorsList';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SelectDoctors from './components/doctors/SelectDoctors'
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.fetchDoctors();
    this.props.getReports();
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
              <Route path="/reports" component={SelectDoctors} />
            </Switch>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchDoctors, getReports }, dispatch)
}

export default connect(null, mapDispatchToProps)(App)
