import React from 'react'
import {FaStar, FaStarHalfAlt} from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai";

const Star=({stars,reviews})=> {

    const ratingStar= Array.from({ length : 5},(elem,index)=>{
        let number = index + 0.5;

        return(

            <span key={index}>
                {stars >= index+1 ? (<FaStar className="staricon"/>) : stars >= number ? (<FaStarHalfAlt className="staricon"/>) : (<AiOutlineStar className="staricon"/>)}
            </span>
        );
    });

  return (
    <div className="d-flex flex-row">
        {ratingStar}
        <p>({reviews} customer reviews)</p>
    </div>
  )
}

export default Star