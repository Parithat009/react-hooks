import axios from 'axios'

export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const GET_PRODUCTS = 'GET_PRODUCTS'

const getProduct = (products, state) => {
  return { ...products }
}

// const getProduct = async (state) => {
//   let products = {
//     all: ''
//   }
// axios.get('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     // console.log(response.data)
//     if (response.data) {
//       products = response.data
//       return { products }
//     }
//   })
//   .catch(e => console.log(e))
// try {
//   const response = await axios.get('https://jsonplaceholder.typicode.com/users')
//   if (response.data.length > 0) {
//     products.all = response.data
//     return { products }
//   }
// }
// catch (e) {
//   console.log(e)
// }
// console.log(products)

// }

const deleteProduct = (id, state) => {
  axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => console.log(response))
    .catch(error => console.log(error))
  return { state }
}

export const productReducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return getProduct(action.products, state)
    case DELETE_PRODUCT:
      return deleteProduct(action.id, state)
    default:
      return state
  }
}