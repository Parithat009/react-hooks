import React from 'react'
import { Redirect } from 'react-router-dom'
import AppLayout from '../components/layout/AppLayout'

export const DashBoard = () => {
  const token = 'sds'
  if (!token) {
    return <Redirect to='/hookform' />
  }
  else if (token) {
    return (
      <div>
        <AppLayout />
      </div>
    )
  }
}
