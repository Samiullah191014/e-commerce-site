// import React from "react";
// import { NavLink } from "react-router-dom";
// import FormatPrice from "../Helpers/FormatPrice";

// const Product = (curElem) => {
//   const { id, name, image, price, category } = curElem;
//   return (
//     <NavLink to={`/singleproduct/${id}`}>
//       <div className="card">
//         <figure>
//           <img src={image} alt={name} />
//           <figcaption className="caption">{category}</figcaption>
//         </figure>

//         <div className="card-data">
//           <div className="card-data-flex">
//             <h3>{name}</h3>
//             <p className="card-data--price">{<FormatPrice price={price} />}</p>
//           </div>
//         </div>
//       </div>
//     </NavLink>
//   );
// };

// export default Product;






import React from 'react'
import {NavLink} from "react-router-dom"
import FormatPrice from "../Helpers/FormatPrice";

const Product=(curElem)=> {

  const {id,name,image,price,category} =curElem;
  return (<>
   <NavLink to ={`/singleproduct/${id}`} style={{ textDecoration: "none",color: "gray"}}>
   {/* mojay os particular id per redirect be karna hai tho isleya may singleproduct/:id nahi lek saktha
    isleya mojay ${id} lekna hai */}

    <div className="card">
        <figure>
          <img src={image} alt={name} className="img1"/>
          <figcaption className="caption">{category}</figcaption>
        </figure>

       <div className="card-data">
          <div className="card-data-flex">
            <h3 >{name}</h3>
             <p >{<FormatPrice price={price} />}</p>
         </div>
         </div>
      </div>
      </NavLink>
 </> )
}

export default Product