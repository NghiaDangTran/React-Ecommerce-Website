import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'
import AmountButtons from './AmountButtons'

const AddToCart = ({ id, colors, stock,price ,images,name}) => {
  const [val, setVal] = useState(1) 
   const [curr, setCurr] = useState(0)
   const {addCart}=useCartContext()
  return <Wrapper>
    <div className="colors">
      <span>colors: </span>
      <div>
        {colors.map((i, index) => {


          return <button key={index} name="colors" onClick={() => { setCurr(index) }} value={i} className={`color-btn ${curr === index && "active"}`}
            style={{ background: `${i}` }}
          >{curr === index && <FaCheck></FaCheck>}</button>
        })}
      </div>

    </div>
    <div className="btn-container">

      <AmountButtons {...{ id, stock,val, setVal }}></AmountButtons>


      <Link to="/cart" className='btn' onClick={()=>{
//{id,value,colors,url,price,stock}

addCart(id,val,colors[curr],images,price,stock,name)
      }}>Add to cart</Link>

    </div>
  </Wrapper>
}

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`
export default AddToCart
