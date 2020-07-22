import React from 'react'
import AppContent from './AppContent'
import AppSidebar from './AppSidebar'
import '../../assets/css/layout/AppLayout.css'

const AppLayout = (props) => {
  return (
    <div>
      <AppSidebar {...props} />
      <AppContent {...props} />
    </div>
  )
}

export default AppLayout
