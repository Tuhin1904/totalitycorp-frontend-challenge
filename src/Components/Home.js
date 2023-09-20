import React from 'react'
import "./Styles/Home.css"
import Products from './Products';
import banner from "../Media/banner2.jpg"
import laptop from "../Media/laptop.png"
import iphone from '../Media/iphoneFront.png'
import smartWatch from '../Media/smartwatch.png'
import headphone from '../Media/headphone.png'
import soap1 from '../Media/soap1.png'
import buds from '../Media/buds.png'
import bulb from '../Media/bulb.png'
import notebook from '../Media/notebook1.png'
import battery from '../Media/battery.png'
import bag1 from '../Media/bag1.png'
import pillow1 from '../Media/pillow1.png'

function Home() {
  return (
    <div className="home_container">
    <div className="imgDiv">
    <img className="bannerImg" src={banner} alt="" />
    </div>

    <div className="rows">
        <div className="rowItem"><Products title="Mi Buds" price="22" image={buds} rating='⭐⭐⭐'/></div>
        <div className="rowItem"><Products title="iPhone" price="100" image={iphone} rating='⭐⭐⭐⭐'/></div>
        <div className="rowItem"><Products title="Smart Watch" price="50" image={smartWatch} rating='⭐⭐⭐⭐'/></div> 
        <div className="rowItem"><Products title="Headphone" price="10" image={headphone} rating='⭐⭐⭐'/></div>
    </div>
    
    <div className="rows">
        <div className="rowItem"><Products title="Apple:Macbook pro" price="150" image={laptop} rating='⭐⭐⭐⭐⭐'/></div> 
        <div className="rowItem"><Products title="Notebook set " price="30" image={notebook} rating='⭐⭐'/></div>
        <div className="rowItem"><Products title="AA Battery set" price="6" image={battery} rating='⭐⭐⭐'/></div>
    </div>
    
    <div className="rows">
        <div className="rowItem"><Products title="60W Bulb" price="8" image={bulb} rating='⭐⭐⭐⭐⭐'/></div>
        <div className="rowItem"><Products title="Glycerine soap" price="10" image={soap1} rating='⭐⭐⭐⭐'/></div>
        <div className="rowItem"><Products title="Bag Pack" price="15" image={bag1} rating='⭐⭐⭐'/></div> 
        <div className="rowItem"><Products title="Apple:Macbook pro" price="10" image={pillow1} rating='⭐⭐⭐⭐⭐'/></div> 
    </div>
    </div>
  )
}

export default Home