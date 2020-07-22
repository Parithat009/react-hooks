import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import '../../assets/css/layout/AppSidebar.css'
import routes from '../../route/routes'

const AppSidebar = ({ location }) => {
  return (
    <nav>
      <input type='checkbox' id='check' />
      <label htmlFor='check' className='checkbtn'>
        <Icon name='numbered list'  />
      </label>

      {location.pathname === '/'
        ? <label className='logo'> รถของฉัน </label>
        : <label className='logo'> ประวัติที่เคยใช้บริการ </label>
      }

      <ul>
        {/* <li className='listName'>LOGO NAME </li> ใช้ในกรณี่ชื่อมันยาวๆ  */}
        {routes && routes.map((route, i) => (
          <li key={i}><NavLink to={route.path}>{route.title}</NavLink></li>
        ))}

      </ul>
    </nav>
  )
}

export default AppSidebar
