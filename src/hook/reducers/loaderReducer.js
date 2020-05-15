export const OPEN_LOADER = 'OPEN_LOADER'
export const CLOSE_LOADER = 'CLOSE_LOADER'

const openLoader = (state, message) => {
  let loader = {
    open: true,
    message: message
  }
  return { ...state, ...loader }
}

const closeLoader = (state) => {
  let loader = {
    open: false,
    message: ''
  }
  return { ...state, ...loader }
}

export const loaderReducer = (state, action) => {
  switch (action.type) {
    case OPEN_LOADER:
      return openLoader(state, action.message)
    // return {
    //   ...state,
    //   ...action.loader
    // }

    case CLOSE_LOADER:
      return closeLoader(state)
    default:
      return state
  }
}