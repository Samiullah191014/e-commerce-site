import React from 'react'
import {NavLink} from "react-router-dom";
import {AiOutlineShoppingCart} from "react-icons/ai";


function Navbar1() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <NavLink className="navbar-brand" to="/">
        <img src="./images/logo.png" alt="" />
        
    </NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/product">Product</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link " to="/contact" >Contact</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link position-relative trolleyclass " to="/cart" ><AiOutlineShoppingCart/>
          <span class="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-danger">
          8+
          
          </span>   
          </NavLink>
          
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar1