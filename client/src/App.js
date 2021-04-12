import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/layout/navbar'
import Landing from './components/layout/landing'
import Login from './components/layout/auth/Login'
import Register from './components/layout/auth/Register'
import { Provider } from 'react-redux'
import store from './store'


class App extends Component {

  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={ Landing } />
            <Route exact path="/register" component={ Register } />
            <Route exact path="/login" component={ Login } />
          </div>
        </Router>
      </Provider>
    )
  }

}
export default App