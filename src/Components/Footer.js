import React from 'react'
import "./Styles/Footer.css"
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
    <div className="footercontent">
        <div className="fleft">
            <h5>Connect with us</h5>
            <a href="facebook.com"><h6>Facebook</h6></a>
            <a href="twitter.com"><h6>Twitter</h6></a>
            <a href="instagram.com"><h6>Instagram</h6></a>
        </div>
        <div className="fmiddle">
            <h5>Make money with us</h5>
            <h6>Sell on TuhinKart</h6>
            <h6>Advertise on TuhinKart</h6>
        </div>
        <div className="fright">
            <h5>Get to know us</h5>
            <Link to="/about"><h6>About Us</h6></Link>
            <a href="linkedin.com"><h6>Career</h6></a>
            <a href="https://react.dev/"><h6>Technology we use</h6></a>
        </div>
    </div>
    </div>
  )
}

export default Footer