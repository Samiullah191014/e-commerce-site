import React from 'react'
import {NavLink} from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <div className="container w-75">
        <div className="row">
          <h1 className="text-center">404</h1>
          <h6 className="text-center">UH OH! You're lost.</h6>
          <p>the page you are looking for does not exist.How you got here is a mystery. But you click the 
          button below to go the homepage.</p>
          <div className="text-center">
          <button className="btn btn-primary ">
          <NavLink to="/" className="text-white" style={{textDecoration:"none"}}>Home</NavLink>
          </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ErrorPage