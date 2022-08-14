import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
  if (action.type === UPDATE_FILTERS) {
    let newState = { ...state }
    newState[action.payload.at] = action.payload.value
    return { ...newState }
  }
  if (action.type === LOAD_PRODUCTS) {
    const dat = []
    action.payload.data.forEach(i => {

      dat.push(i)
    })

    return { ...state, InitData: action.payload.data, dataFilter: dat }
  }
  if (action.type === CLEAR_FILTERS) {

    return { ...action.payload }
  }
  if (action.type === SET_GRIDVIEW) {

    return { ...state, gridView: true }
  }
  if (action.type === SET_LISTVIEW) {

    return { ...state, gridView: false }
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload }
  }
  if (action.type === SORT_PRODUCTS) {
    const init = state.InitData
    let temp = state.dataFilter

    const sortData = (a, b) => {
      if (state.sort === "price-lowest")
        return a.price - b.price

      if (state.sort === "price-highest")
        return b.price - a.price
      if (state.sort === "name-a") {
        var textA = a.name.toLowerCase();
        var textB = b.name.toLowerCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      }
      if (state.sort === "name-z") {
        var textA = a.name.toLowerCase();
        var textB = b.name.toLowerCase();
        return (textB < textA) ? -1 : (textB > textA) ? 1 : 0;
      }


    }
    temp.sort(sortData)

    return { ...state, dataFilter: temp, InitData: init }
  }
  if (action.type === FILTER_PRODUCTS) {

    const tempData = state.InitData.filter((i) => {
      let stay = true
      const { name, price, category, colors, company, shipping } = i
      if (name) {
        stay = stay && name.toLowerCase().startsWith(state.search)
        if (!stay)
          return stay
      }
      if (price) {
        stay = stay && price / 100 <= state.currPrice
        if (!stay)
          return stay
      }
      if (category) {
        stay = stay && state.category.toLowerCase() === "all" ? true : category.toLowerCase() === state.category.toLowerCase()
        if (!stay)
          return stay
      }

      if (colors) {
        stay = stay && state.colors.toLowerCase() === "all" ? true : colors.includes(state.colors)
        if (!stay)
          return stay
      }
      if (company) {
        stay = stay && state.company.toLowerCase() === "all" ? true : company.toLowerCase() === state.company.toLowerCase()
        if (!stay)
          return stay
      }
      if (shipping) {
        stay = stay && !state.freeShipping ? true : shipping
        if (!stay)
          return stay
      }
      else if (state.freeShipping) {
        stay = false
      }

      return stay
    })


    return { ...state, dataFilter: tempData }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
