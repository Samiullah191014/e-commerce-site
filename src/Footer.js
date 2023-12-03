import React from 'react'
import {BsFacebook} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {AiFillYoutube} from "react-icons/ai";
import {FiInstagram} from "react-icons/fi";

function Footer() {
  return (
    <>
    <div className="container mt-5 w-50  ">
        <div className="row d-flex flex-row bgclass ">
            <div className="col p-4">
                <span className="fw-bold ">Ready to get started</span><br/>
                <span className="fw-bold">talk to us today</span>
            </div>
            <div className="col d-flex justify-content-end p-4">
                <button className="btn btn-primary text-end">Get Started</button>
            </div>
        </div>
    </div>

    
    <footer class="text-center text-white abc" >
 
  <div class="container pt-4 ">
   
    <section class="mb-4 ">
      
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><BsGithub className="icons"/></a>

  
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><BsFacebook className="icons"/></a>

     
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><BsTwitter className="icons"/></a>

      
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><FiInstagram className="icons"/></a>

      
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><AiFillYoutube className="icons"/></a>
      
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><FiInstagram className="icons"/></a>
    </section>
    
  </div>
  
  <div class="text-center text-white p-3 abc " >
    © 2020 Copyright reserved by ThapaStore
    
  </div>
  
</footer>


    </>
  )
}

export default Footer