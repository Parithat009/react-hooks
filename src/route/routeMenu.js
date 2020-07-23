import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { DashBoard } from '../pages/dashBoard'

const RouteMenu = () => {
  return (
    <Switch>
      <Route path='/' component={DashBoard} />
    </Switch>
  )
}

export default RouteMenu
