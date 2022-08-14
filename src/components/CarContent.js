import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import CartColumns from './CartColumns'
import CartItem from './CartItem'
import CartTotals from './CartTotals'

const CartContent = () => {
  const {cart,removeAll}=useCartContext()
if (cart.length<=0)
{
return <Wrapper className='page-100'>


<div className='empty'>
<h2>Your cart is empty</h2>
<Link to="/products" className='btn'>shop now</Link>
</div>
</Wrapper>

}
  return <Wrapper className='section section-center'>
  <CartColumns></CartColumns>
  {cart.map((i,index)=>{

  
    return <CartItem key={index} {...i}/>
  })}
  
  <div className="link-container">
<Link to="/products" className='link-btn'>continue shopping</Link>
<button type='button' className='link-btn clear-btn' onClick={removeAll}>
  clear shoping cart
</button>

  </div>
  <CartTotals></CartTotals>
   </Wrapper>
}
const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
`
export default CartContent
