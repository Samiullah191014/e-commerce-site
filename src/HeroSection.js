import React from 'react'
import {NavLink} from "react-router-dom";
import "./App.css";


function HeroSection({props}) {
    const {name} = props;
  return (
    <>

<div className="container ">
        <div className="row mt-5 ">
          <div className="col ">
            <span> Welcome to</span>
            <h1>{name}</h1>
            <p>loreem ipsum and natioal game of pakistan is what ha 
            hdhfffhh kaka mama nana khan jan man abc def ghi jkl mno
            salamat khan kaka is in peshawar </p>
            <NavLink to="/product">
              <button className="btn btn-primary">Shop now</button>
            </NavLink>
          </div>

          <div className="col">
            <img src="./images/hero.jpg" className="img-style" alt="" />
          </div>
        </div>
       </div>
        
    </>
  )
}

export default HeroSection