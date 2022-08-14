import React from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout } from '../components'
// extra imports
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  const { total } = useCartContext()



  return <main>
    <PageHero text="cart">

    </PageHero>
    <Wrapper className='page'>
      {total === 0 ? <div className='empty'>
        <h2>Your cart is empty</h2>
        <Link to="/products" className='btn'>shop now</Link>
      </div> : <StripeCheckout></StripeCheckout>}

    </Wrapper>
  </main>
}
const Wrapper = styled.div`
display:flex;
align-items:center;
justify-content:center;
.empty{
  text-align:center
}

`
export default CheckoutPage
