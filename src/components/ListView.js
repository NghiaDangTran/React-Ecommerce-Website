import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'
const ListView = ({data}) => {
  if (data.length === 0)
    return <Wrapper>


      <h5 style={{ textTransform: 'none' }}>Sorry, no products matched your search.</h5>

    </Wrapper>
  return <Wrapper>

{data.map((i,index)=>{

const { image, name, price, id,description }=i
  return <article key={id}>
<img src={image} alt="" />
<div>
  <h4>{name}</h4>
  <h5 className='price'>{formatPrice(price/100)}</h5>
  <p>{description.slice(0,150)} ...</p>
  <Link className='btn' to={`/products/${id}`}>details</Link>
</div>
  </article>
})}

  </Wrapper>
}

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`

export default ListView
