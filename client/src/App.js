import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/layout/navbar'
import Landing from './components/layout/landing'
import Login from './components/layout/auth/Login'
import Register from './components/layout/auth/Register'


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={ Landing } />
          <Route exact path="/register" component={ Register } />
          <Route exact path="/login" component={ Login } />
        </div>
      </Router>
    );
  }

}
export default App