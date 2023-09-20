import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './Components/About';
import Products from './Components/Products';
import Contact from './Components/Contact';
import Cart from "./Components/Cart"
import Eachproduct from "./Components/Eachproduct"
// import Errorpg from './Components/Errorpg';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
function App() {
  return (
    <>
        
        
   <Router>
   <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/product" element={<Products/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/eachproduct/:id" element={<Eachproduct/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<Home/>}/>
      </Routes>
    <Footer/>
   </Router>
   </>
  );
}

export default App;
