import React from 'react'
import {TbTruckDelivery} from "react-icons/tb";
import {MdSecurity} from "react-icons/md";
import {GiReceiveMoney} from "react-icons/gi";
import {RiSecurePaymentLine} from "react-icons/ri";

function Services() {
  return (
   <> 
   <div className="container mt-5">
    <div className="row gap-2 ">
        <div className="col-sm d-flex flex-column  col1 justify-content-center "> 
        <span className="text-center icon "><TbTruckDelivery/></span>
        <span className="text-center"> Super fast and free delivery</span>
        </div>
        <div className="col-sm  col1 col2 ">
            <div className="row text-start"> 
                <span ><MdSecurity className="icon"/>  Non-Contact shipping </span>
    
            </div> 
            <div className="row text-start  "> 
            <span ><GiReceiveMoney className="icon"/> Money-back gurantee </span>
            
            </div>
        </div>
        <div className="col-sm d-flex flex-column  col1 justify-content-center ">
        <span className="text-center icon " ><RiSecurePaymentLine/></span>
        <span className="text-center"> Super secure payment system</span>
        </div>
    </div>
   </div>
   </>
  )
}

export default Services