import React from 'react'
import styled from 'styled-components'
import Product from './Product'

const GridView = ({ data }) => {
  if (data.length === 0)
    return <Wrapper>


      <h5 style={{ textTransform: 'none' }}>Sorry, no products matched your search.</h5>

    </Wrapper>
  else
    return <Wrapper>
      <div className='products-container'>

        {data.map((i, index) => {
          const { image, name, price, id } = i

          return <Product key={index} {...i}></Product>
        })}


      </div>


    </Wrapper>
}

const Wrapper = styled.section`
  img {
    height: 175px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`

export default GridView
