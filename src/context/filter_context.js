import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/filter_reducer'
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'
import { useProductsContext } from './products_context'

const initialState = {
  InitData: [],
  dataFilter: [],
  category: "All",
  company: "All",
  colors: "All",
  currPrice: Infinity,
  freeShipping: false,
  resetFillter: false
  , search: "",
  gridView: true,
  sort:"price-lowest"
}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
  const { dataAll } = useProductsContext()
  const [state, dispatch] = useReducer(reducer, initialState)

  const SortData=(e)=>{
      dispatch({type:UPDATE_SORT,payload:e})
      dispatch({type:SORT_PRODUCTS,payload:state.dataFilter})


  }
  const setGrid = (grid) => {
    if (grid) { dispatch({ type: SET_GRIDVIEW }) }
    else
      dispatch({ type: SET_LISTVIEW })
  }
  const LoadProduct = () => {

    dispatch({ type: LOAD_PRODUCTS, payload: { data: dataAll } })
    dispatch({type:SORT_PRODUCTS,payload:state.dataFilter})


  }
  const delteFiter = () => {
    let stateTemp = initialState
   
    stateTemp["dataFilter"] = JSON.parse(JSON.stringify(state.InitData));
    stateTemp["gridView"] = state.gridView
    stateTemp["InitData"] = state.InitData
    stateTemp["sort"] = state.sort
    console.log(stateTemp)
    dispatch({ type: CLEAR_FILTERS, payload: stateTemp })

  }


  const handelChange = (e) => {
    const at = e.target.name
    let value = e.target.value

    if (at === "search") {
      dispatch({ type: UPDATE_FILTERS, payload: { at, value } })
    }
    if (at === "category") {
      dispatch({ type: UPDATE_FILTERS, payload: { at, value } })
    }
    if (at === "company") {
      dispatch({ type: UPDATE_FILTERS, payload: { at, value } })
    }
    if (at === "colors") {
      dispatch({ type: UPDATE_FILTERS, payload: { at, value } })
    }

    else if (at === "currPrice") {
      dispatch({ type: UPDATE_FILTERS, payload: { at, value } })
    }

    else if (at == "freeShipping") {
      let value = e.target.checked
      dispatch({ type: UPDATE_FILTERS, payload: { at, value } })
    }
    dispatch({ type: FILTER_PRODUCTS })

    dispatch({type:SORT_PRODUCTS,payload:state.dataFilter})

  }

  useEffect(() => {


    LoadProduct()

  }, [dataAll])
  return (
    <FilterContext.Provider value={{ ...state, handelChange, delteFiter, setGrid ,SortData}}>
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}
