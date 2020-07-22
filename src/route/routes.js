import Contact from '../pages/contact'
import Main from '../pages/main'
import Map from '../pages/map'

const routes = [
  {
    component: Main,
    exact: true,
    path: '/',
    title: 'Home'
  },
  {
    component: Contact,
    path: '/history',
    title: 'History'
  },
  {
    component: Map,
    path: '/map',
    title: 'Map'
  }
]

export default routes