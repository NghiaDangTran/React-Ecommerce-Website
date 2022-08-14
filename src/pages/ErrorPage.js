import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import err from '../assets/404.jpg'
const ErrorPage = () => {
  return <Wrapper className='page-100'>

    <div>



      <section>
        <h1>404</h1>
        <h3>Sorry, the page you tried cannot be found</h3>
        <Link to='/' className='btn'>
          back home
        </Link>
      </section>
      <img src={err} alt="" />
    </div>
  </Wrapper>
}

const Wrapper = styled.main`
  ${'' /* background: var(--clr-primary-10); */}
  
    display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  div{
    display: grid;
    grid-template-columns: 6fr 6fr;

  }
  img{
    width:90%; /* you can use % */
    height: max(90%,200px);
  }
  section{
    display: flex;
    flex-direction: column;

  justify-content: center;
  align-items: center;
  text-align: center;
  }

  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
  @media only screen and (max-device-width: 480px) {
    div{
    display: grid;
    grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  }

    }
`

export default ErrorPage
