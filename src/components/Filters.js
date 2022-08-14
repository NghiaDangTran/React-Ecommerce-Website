import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues, formatPrice } from '../utils/helpers'
import { FaCheck } from 'react-icons/fa'
// category:["All"],
// company:["All"],
// colors:["All"],
// priceRange:[],
const Filters = () => {
  const { handelChange, search, InitData, currPrice, category,colors,delteFiter,company,freeShipping } = useFilterContext()
  const categoryALl = getUniqueValues(InitData, "category")
  const companyAll = getUniqueValues(InitData, "company")
  const colorsAll = getUniqueValues(InitData, "colors")
  const priceMax = getUniqueValues(InitData, "price")
  return <Wrapper >
    <div className="content">

      <form action="">
        <div className="form-control">
          <input type="text" name="search" className='search-input' placeholder='Search' value={search} onChange={handelChange} />

        </div>
        <div className="form-control">
          <h5>category</h5>


          {categoryALl.map((i, index) => {

            return <button key={index} type="button" name="category" className={`${category.toLowerCase() === i && "active"}`} onClick={handelChange} value={i}>{i}</button>
          })}

        </div>
        <div className="form-control">
          <h5>company</h5>
          <select name="company" className='company' id="" onChange={handelChange } value={company}>

            {companyAll.map((i, index) => {



              return <option key={index} name="company" value={i}  > {i}</option>
            })}


          </select>

        </div>

        <div className="form-control">
          <h5>colors</h5>
          <div className='colors'>


            {colorsAll.map((i, index) => {

              return <button key={index} name="colors" onClick={e => { handelChange(e); e.preventDefault(); }} value={i} className={`${i === "all" ? "all" : "color"}-btn ${colors.toLowerCase() === i &&"active"}`}
                style={{ background: `${i}` }}
              >{i === "all" ? i : colors.toLowerCase() === i &&<FaCheck></FaCheck>}</button>
            })}


          </div>


        </div>
        <div className="form-control">
          <h5>price</h5>
          <p className='price'>{currPrice===Infinity?formatPrice(priceMax):formatPrice(currPrice)}</p>
          <input type="range" name='currPrice' min={0} max={priceMax} value={currPrice===Infinity?priceMax:currPrice} onChange={handelChange} />
        </div>
        <div className="form-control shipping">
          <label htmlFor="shipping"><h5>free shipping</h5></label>

          <input type="checkbox" name="freeShipping" onChange={handelChange} checked={freeShipping}/>
        </div>
      </form>

      <button className='clear-btn' type='button'  onClick={delteFiter} >
        Clear Filters

      </button>


    </div>



  </Wrapper>
}

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
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
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`

export default Filters
