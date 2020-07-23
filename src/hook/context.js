import React, { createContext, useReducer } from 'react'
import { withRouter } from 'react-router-dom'
import { usersReducer, GET_USERS, EDIT_STATUS_USERS } from '../hook'
import axios from 'axios'

const Axios = axios.create({ baseURL: 'http://jsonplaceholder.typicode.com/users' })
export const AppContext = createContext({})

export const Context = ({ children }) => {
  const [users, dispatchUsers] = useReducer(usersReducer, [])

  const getData = async () => {
    try {
      const response = await Axios.get()
      if (response.status === 200) {
        let mockUser = []
        response.data && response.data.length > 0 && response.data.map((item, i) => {
          let element = {
            ...item,
            status: false
          }
          mockUser.push(element)
        })
        dispatchUsers({ type: GET_USERS, users: mockUser })
        return { status: 'success' }
      }
    }
    catch (e) {
      console.log(e)
      return { status: 'fail' }
    }
  }

  const editStatusUsers = (id) => {
    let mockUsers = []
    users && users.length > 0 && users.map(user => {
      let element = {}

      if (user.id === id) {
        element = { ...user, status: !user.status }
      } else {
        element = { ...user, status: false }
      }

      mockUsers.push(element)
    })
    dispatchUsers({ type: EDIT_STATUS_USERS, users: mockUsers })
  }


  const hook = {
    users, getData, editStatusUsers
  }

  return (
    <AppContext.Provider value={hook} >
      {children}
    </AppContext.Provider>
  )
}

export const Provider = withRouter(Context)
export const Consumer = AppContext.Consumer

