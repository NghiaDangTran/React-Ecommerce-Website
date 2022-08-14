import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

const cart_reducer = (state, action) => {
  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const found = state.cart.findIndex(i => i.id === action.payload.id && i.colors === action.payload.color)

    let newCart = state.cart
    newCart[found].value = action.payload.val
    return { ...state, cart: newCart }



  }
  if (action.type === CLEAR_CART) {

    return {
      ...state, cart: [], totalVal: 0,
      total: 0
    }



  }
  if (action.type === COUNT_CART_TOTALS) {
    let totalVal = 0
    let total = 0
    state.cart.forEach(i => {
      totalVal += i.price * i.value
      total += i.value


    });


    return {
      ...state, totalVal,
      total
    }



  }
  if (action.type === REMOVE_CART_ITEM) {
    const found = state.cart.findIndex(i => i.id === action.payload.id && i.colors === action.payload.color)
    let newCart = state.cart.filter((i, index) => {

      return index !== found
    })

    return { ...state, cart: newCart }



  }
  if (action.type === ADD_TO_CART) {
    const found = state.cart.findIndex(i => i.id === action.payload.id)
    let newCart = state.cart
    if (found < 0) {

      newCart.push(action.payload)
    }
    else {

      if (newCart[found].colors === action.payload.colors)
        newCart[found] = action.payload
      else {
        newCart.push(action.payload)

      }

    }

    return { ...state, cart: newCart }
  } throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer
