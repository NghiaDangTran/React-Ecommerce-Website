import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {
  AboutPage,
  CartPage,
  CheckoutPage,
  ErrorPage,
  HomePage,
  ProductsPage,
  SingleProductPage, PrivateRoute
} from './pages'
import styled from 'styled-components'
function App() {
  return <Router>
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <Routes>
      <Route path='/' element={<HomePage></HomePage>}></Route>
      <Route path='/about' element={<AboutPage></AboutPage>}></Route>
      <Route path='/products' element={<ProductsPage></ProductsPage>}></Route>
      <Route path='/products/:Address' element={<SingleProductPage></SingleProductPage>}></Route>
      <Route path='/cart' element={<CartPage></CartPage>}></Route>
      <Route path='/*' element={<ErrorPage></ErrorPage>}></Route>
      <Route path='/checkout' element={<PrivateRoute>
        <CheckoutPage></CheckoutPage>

      </PrivateRoute>}></Route>

    </Routes>
    <Footer></Footer>
  </Router>





}

export default App
