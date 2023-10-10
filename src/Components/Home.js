import React from 'react'
import "./Styles/Home.css"
import Products from './Products';
import banner from "../Media/banner2.jpg"
import products from './productinfo';


function Home() {
  return (
    <div className="home_container">
    <div className="imgDiv">
    <img className="bannerImg" src={banner} alt="" />
    </div>
    <div style={{display:'flex'}}>
    {products.map((product)=>(
      product.pid>0 && product.pid<5 ?(
    <div className="rows"><div key={product.id} className="rowItem"> 
      <Products id={product.pid} title={product.ptitle} price={product.price} image={product.image} rating={product.rating}/>
      </div>
    </div>):null
     ))}</div>
    <div style={{display:'flex'}}>
    {products.map((product)=>(
      product.pid>=5 && product.pid<=7 ?(
    <div className="rows"><div key={product.id} className="rowItem"> 
      <Products id={product.pid} title={product.ptitle} price={product.price} image={product.image} rating={product.rating}/>
      </div>
    </div>):null
     ))}</div>
    <div style={{display:'flex'}}>
    {products.map((product)=>(
      product.pid>=8 && product.pid<12 ?(
    <div className="rows"><div key={product.id} className="rowItem"> 
      <Products id={product.pid} title={product.ptitle} price={product.price} image={product.image} rating={product.rating}/>
      </div>
    </div>):null
     ))}</div>




    </div>  
  )
}

export default Home