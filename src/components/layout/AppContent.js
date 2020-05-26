import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MyApp from '../myApp'
import Contact from '../../pages/contact'

const routes = [
  {
    component: MyApp,
    exact: true,
    path: '/'
  },
  {
    component: Contact,
    path: '/contact'
  }
]

const AppContent = (props) => {
  console.log(props)
  return (
    <div className='content' >
      <Switch>
        {routes.map((route, index) => (
          // Render more <Route>s with the same paths as
          // above, but different components this time.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    </div>
  )
}

export default AppContent
