import React from 'react'
import "./Styles/Home.css"
import banner from "../Media/banner2.jpg"
import laptop from "../Media/laptop.png"
import Products from './Products';

function Home() {
  return (
    <div className="home_container">
    <div className="imgDiv">
    <img className="bannerImg" src={banner} alt="" />
    </div>

    <div className="rows">
    
        <div className="rowItem"><Products title="Apple:Macbook pro" price="30" image={laptop} rating='⭐⭐⭐'/></div>
        <div className="rowItem"><Products title="Apple:Macbook pro" price="30" image={laptop} rating='⭐⭐⭐'/></div>
        <div className="rowItem"><Products title="Apple:Macbook pro" price="30" image={laptop} rating='⭐⭐⭐'/></div> 
        <div className="rowItem"><Products title="Apple:Macbook pro" price="30" image={laptop} rating='⭐⭐⭐'/></div>
    </div>
    <div className="rows">
        <Products title="Apple:Macbook pro" price="30" image={laptop} rating='⭐⭐⭐'/>
        <Products title="Apple:Macbook pro" price="30" image={laptop} rating='⭐⭐⭐'/>
        <Products title="Apple:Macbook pro" price="30" image={laptop} rating='⭐⭐⭐'/>
    </div>
    <div className="rows">
        <Products title="Apple:Macbook pro" price="30" image={laptop} rating='⭐⭐⭐'/>
        <Products title="Apple:Macbook pro" price="30" image={laptop} rating='⭐⭐⭐'/> 
        <Products title="Apple:Macbook pro" price="30" image={laptop} rating='⭐⭐⭐'/> 
        <Products title="Apple:Macbook pro" price="30" image={laptop} rating='⭐⭐⭐'/> 
    </div>
    </div>
  )
}

export default Home