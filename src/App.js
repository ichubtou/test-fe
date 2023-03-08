import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import Test from './components/Test';

class App extends Component {
  render() {
  return (
    <div>
    <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Test}></Route>
          </Switch>
        </div>
     </Router>
  </div>
  );
  }
  }

export default App;

