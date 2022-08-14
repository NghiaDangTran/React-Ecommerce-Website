import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SingleProductPage = () => {
  const { Address } = useParams()


  const { fecthSingleData, SingleData, singleLoading, singleErr } = useProductsContext()

  useEffect(() => {


    fecthSingleData(`${url}${Address}`)
  }, [Address])
  if (singleLoading || (SingleData.length===0 && !singleErr))
    return <Wrapper>
      <Loading></Loading>

    </Wrapper>
  if (singleErr ) {
    return <Wrapper>
      <Error></Error>

    </Wrapper>
  }
  const { stock, id: sku, price, images, reviews, stars, name, description, company } = SingleData
  return <Wrapper>
    <PageHero text="Back to Products" text2="name"></PageHero>
    <div className='section section-center page'>

      <Link className='btn' to="/products">back to products</Link>

      <div className='product-center'>
        <ProductImages img={images}></ProductImages>
        <section className='content'>
          <h2>{name}</h2>
          <Stars {...{reviews, stars}}></Stars>

          <h5 className="price">{formatPrice(price / 100)}</h5>
          <p className='desc'>{description}</p>
          <p className=''></p>
          <p className='info'>
            <span>Available :</span>

            {stock > 0 ? "in stock" : "out stock"}
          </p>
          <p className='info'>
            <span>SKU :</span>

            {sku}
          </p>
          <p className='info'>
            <span>Brand :</span>

            {company}
          </p>
          <hr />

          {stock>0 && <AddToCart 
        {...SingleData} >


</AddToCart>}
         

        </section>



      </div>
    </div>
  </Wrapper>
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage
