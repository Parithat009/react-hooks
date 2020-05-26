import React, { createContext, useReducer } from 'react'
import { withRouter } from 'react-router-dom'
import { productReducer, loaderReducer, GET_PRODUCTS } from '../hook'
import axios from 'axios'

const Axios = axios.create({ baseURL: 'https://api.spacexdata.com/v3/dragons' })
export const AppContext = createContext({})

export const Context = ({ children }) => {
  const [products, dispatchProducts] = useReducer(productReducer, { all: [] })
  const [loader, dispatchLoader] = useReducer(loaderReducer, { open: false, message: '' })

  const getData = async () => {
    try {
      const response = await Axios.get()
      dispatchProducts({ type: GET_PRODUCTS, products: { all: response.data } })
    }
    catch (e) { console.log(e) }
  }

  const hook = {
    products, getData,
    loader, dispatchLoader
  }

  return (
    <AppContext.Provider value={hook} >
      {children}
    </AppContext.Provider>
  )
}

export const Provider = withRouter(Context)
export const Consumer = AppContext.Consumer

