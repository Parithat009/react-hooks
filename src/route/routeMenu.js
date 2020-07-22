import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

// import MyApp from '../components/myApp'
// import { HelloHookForm } from '../components/helloHookForm'
import { DashBoard } from '../pages/dashBoard'

const RouteMenu = () => {
  return (
    <Switch>
      <Route path='/' component={DashBoard} />
      {/* <Route path='/hookform' component={HelloHookForm} />
      <Route path='/myapp' component={MyApp} /> */}
    </Switch>
  )
}

export default RouteMenu
