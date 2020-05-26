import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

// import MyApp from '../components/myApp'
// import { HelloHookForm } from '../components/helloHookForm'
import {DashBoard} from '../pages/dashBoard'

export default class RouteMenu extends Component {
  render() {
    return (
      <Switch>
        <Route exact component={DashBoard} />
        {/* <Route path='/hookform' component={HelloHookForm} /> */}
        {/* <Route path='/myapp' component={MyApp} /> */}
      </Switch>
    )
  }
}
