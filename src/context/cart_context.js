import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/cart_reducer'
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,// remove individual
  TOGGLE_CART_ITEM_AMOUNT,//+-
  CLEAR_CART,//clear all
  COUNT_CART_TOTALS,// count the total
} from '../actions'
// {name,color,price,url,id}

const checkLocal = () => {
  let cart = localStorage.getItem(('cart'))
  if (cart) {
    return JSON.parse(cart)
  }
  else {
    return []
  }

}

const initialState = {
  cart: checkLocal(),
  totalVal: 0,
  total: 0
}

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setVal = (val, id, color) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, val, color } })

    dispatch({ type: COUNT_CART_TOTALS })

  }
  const remove = (id, color) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: { id, color } })
    dispatch({ type: COUNT_CART_TOTALS })


  }
  const removeAll = () => {
    dispatch({ type: CLEAR_CART })
    dispatch({ type: COUNT_CART_TOTALS })


  }
  const addCart = (id, value, colors, url, price, stock, name) => {
    const data = { id, value, colors, url: url[0].thumbnails.full.url, price, stock, name }
    dispatch({ type: ADD_TO_CART, payload: data })
    localStorage.setItem('cart', JSON.stringify(state.cart))

    dispatch({ type: COUNT_CART_TOTALS })

  }
  useEffect(() => {
    console.log("ji")
    localStorage.setItem('cart', JSON.stringify(state.cart))
    dispatch({ type: COUNT_CART_TOTALS })

  }, [state.cart])

  return (
    <CartContext.Provider value={{ ...state, addCart, setVal, remove, removeAll }}>{children}</CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}
