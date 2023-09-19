import "./Styles/Header.css"
import sitelogo from "F:/e-commerce/src/Media/sitelogo.png" 
import React from 'react'
import {FaSearch,FaShoppingCart} from "react-icons/fa"
import { Link } from "react-router-dom"

function Header() {
  return (
    <div className="header" >
        <span id="logo_span">
          <Link to = "./"><img src={sitelogo} alt="logo" /> </Link>
        </span>

        <div className="header_search">
          <input type=" " />
          <span  className="sicon"><FaSearch color="white"/></span>
        </div>
        <div className="header_nav">
          <div className="navOptions">
              <span>Hello, </span>
              <span>Sign In</span>
          </div>
          <div className="navOptions">
              <span>Returns, </span>
              <span>& Orders</span>
          </div>
          <div className="navOptions">
              <span>Plus+ </span>
              <span>Member</span>
          </div>
          <div className="navOptions">
              <span> 0 </span>
              <Link to="./cart">
              <FaShoppingCart color="rgb(255, 243, 74)"/>
              </Link>
          </div>
        </div>
    </div>
  )
}

export default Header