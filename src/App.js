import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import { Home, About, Cart, Products, SingleProduct, Error, Checkout, Private } from './pages';



function App() {
  return <Router>
    <Navbar />
    <Sidebar />
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/about' exact element={<About />}/>
      <Route path='/cart' exact element={<Cart />} />
      <Route path='/products' exact element={<Products />} />
      <Route path='/products/:id' exact element={<SingleProduct />} />
      <Route path='/checkout' exact element={<Checkout />} />
      <Route path='*' element={<Error />} />
    </Routes>
    <Footer />
  </Router>
}

export default App
