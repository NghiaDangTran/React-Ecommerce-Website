import axios from 'axios'
import React, { useContext, useEffect, useReducer, useState } from 'react'
import reducer from '../reducers/products_reducer'
// import { products_url as url } from '../utils/constants'
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

const initialState = {
  sidebarOpen: false,
  data: [],
  dataAll: [],
  dataLoading: false,
  dataError: false,
  SingleData:[],
  singleLoading:false,
  singleErr:false
}

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const openSidebar = (open) => {
    if (open)
      dispatch({ type: SIDEBAR_OPEN })
    else dispatch({ type: SIDEBAR_CLOSE })
  }
  const fecthSingleData = async (single)=>{

    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN })
    try {
      const response = await axios.get(single)
      const data = response.data
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: data })
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR })
    }
  }
  const fetchData = async () => {

    const res = await axios(products_url).then(({ data }) => {

      dispatch({ type: GET_PRODUCTS_BEGIN, payload: data })

      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: { data } })

    }).catch(err => {
      console.log(err);

      dispatch({ type: GET_PRODUCTS_ERROR })
    })
  }

  useEffect(() => {
    fetchData()
    fecthSingleData()
  }, [])
  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, fetchData ,fecthSingleData}}>
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
