import React from "react"
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import PlaceOrder from "./pages/PlaceOrder"
import Orders from "./pages/Orders"
import Cart from "./pages/Cart"
import Product from "./pages/Product"
import Collection from "./pages/Collection"
import Contact from "./pages/Contact"
import About from "./pages/About"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import SearchBar from "./components/SearchBar"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Verify from "./pages/Verify"

const App = () =>{
  return(
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      <NavBar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
      <Footer />
    
    </div>
  )
}

export default App