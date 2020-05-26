import React from 'react'
import AppContent from './AppContent'
import AppSidebar from './AppSidebar'
import '../../assets/css/layout/AppLayout.css'
import { UploadOutlined } from '@ant-design/icons';

const AppLayout = () => {
  return (
    <div>
      <AppSidebar />
      <AppContent />
    </div>
  )
}

export default AppLayout
