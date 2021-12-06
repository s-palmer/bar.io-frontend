import React from "react"
import { Link } from "react-router-dom"


// import React from 'react'
// import './Footer.css';


const Footer = () => {
  return (
    <div className='App'>
      <footer className='footer is-primary'>
      <div className='container'>
          <div className='columns'>
          <div className='column'>
              <p>Copyright &copy; 2021</p>
          </div>
          <div className='column has-text-right'>
              <a className='icon' href='#'><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
              <a className='icon' href='#'><i className='fa fa-twitter'></i></a>
          </div>
          </div>
      </div>
      </footer>
    </div>
  )
}
export default Footer