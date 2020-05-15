import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import MyApp from '../components/myApp'
import { HelloHookForm } from '../components/helloHookForm'

export default class RouteMenu extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={MyApp} />
        <Route path='/hookform' component={HelloHookForm} />
      </Switch>
    )
  }
}
