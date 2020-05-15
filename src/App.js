import React, { Component } from 'react'
// import { firestore, firebaseApp } from './firebase'
import './App.css';
import { withTranslation } from 'react-i18next'
import { Provider } from './hook'
import { BrowserRouter as Router } from 'react-router-dom'
import RouteMenu from './route/routeMenu'

class App extends Component {

  render() {
    return (
      <Provider>
        <Router>
          <RouteMenu />
        </Router>
      </Provider>
    )
  }
}

export default withTranslation()(App)
