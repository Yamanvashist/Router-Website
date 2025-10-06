import './App.css'
import { Navbar } from './navbar/Navbar'
import { Routes, Route } from "react-router-dom";


import Home from './navbar/pages/Home';
import About from './navbar/pages/About';
import Contact from './navbar/pages/Contact';
import Product from './navbar/pages/Product';

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  )
}

export default App
