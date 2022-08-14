import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const { dataFilter, gridView } = useFilterContext()
  if (gridView)
    return <GridView data={dataFilter}> product list</GridView>
  return <ListView data={dataFilter}> product list</ListView>
}

export default ProductList
