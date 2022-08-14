import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const products_reducer = (state, action) => {

  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, sidebarOpen: false }
  }
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, sidebarOpen: true }
  }
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, dataLoading: true }
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
  
      const ret = action.payload.data.filter(i => {
        return i.featured == true
      })
      return { ...state, data: ret, dataLoading: false,dataAll: action.payload.data}
    
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, data: [], dataLoading: false, dataError: true }
  }
  if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
    
    return { ...state, singleLoading: true, singleErr: false }
  }
  if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
  
    
      return { ...state, SingleData:  action.payload, singleLoading: false, singleErr: false}
    
  }
  if (action.type === GET_SINGLE_PRODUCT_ERROR) {
    return { ...state, singleLoading: false, singleErr: true }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer
