import React from 'react'
import {HiOutlineCube} from "react-icons/hi";
import {GiCircleClaws} from "react-icons/gi";
import {GiCompanionCube} from "react-icons/gi";
import {FaHeartbeat} from "react-icons/fa";
import {BsImage} from "react-icons/bs";

function Trusted() {
  return (
    <>
        <div className="container mt-5">
            <div className="row row1 ">
                <h4 className="text-center mt-2"> Trusted By 1000+ Companies</h4>
                <div className="row d-flex flex-row gap-2 ">
                <div className="col">
                <span><HiOutlineCube className="icon"/>Zeina</span>
                </div>
                    
                <div className="col">
                <span><GiCircleClaws className="icon"/></span>
                </div>
                <div className="col">
                <span><GiCompanionCube className="icon"/>LOGIC+</span>
                </div>
                <div className="col">
                <span><FaHeartbeat className="icon"/></span>
                </div>
                <div className="col">
                <span><BsImage className="icon"/>CHARTZ</span>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Trusted