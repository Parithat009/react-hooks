import { AppContext, Provider, Consumer } from './context'
import { GET_PRODUCTS, DELETE_PRODUCT, productReducer } from './reducers/productReducer'
import { OPEN_LOADER, CLOSE_LOADER, loaderReducer } from './reducers/loaderReducer'

export {
    AppContext, Provider, Consumer,
    GET_PRODUCTS, DELETE_PRODUCT, productReducer,
    OPEN_LOADER, CLOSE_LOADER, loaderReducer
}