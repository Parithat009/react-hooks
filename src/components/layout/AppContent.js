import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from '../../route/routes'

const AppContent = ({ match }) => {
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
