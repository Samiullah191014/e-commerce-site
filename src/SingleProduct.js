// import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useProductContext } from "./context/productcontex";
import FormatPrice from "./Helpers/FormatPrice";
import {TbTruckDelivery} from "react-icons/tb";
import {TbReplace} from "react-icons/tb";
import {MdSecurity} from "react-icons/md";
import MyImage from "./components/MyImage";
import Star from "./components/Star";


const API ="https://api.pujakaitem.com/api/products";

const SingleProduct=()=>{
  const {getSingleProduct , isSingleLoading ,singleProduct} =useProductContext();

  const { id } = useParams();
  const {id:alias, name , company,price,description,category,stock,stars,reviews,image,} =singleProduct;


useEffect(()=>{

  getSingleProduct(`${API}?id=${id}`);

},[]);


if(isSingleLoading){
   return
   <div className=""> Loading.....</div>
}



  return(<>
 
 <div className="container ">
  <div className="row">
    <div className="col">
      <MyImage imgs={image}/>
      {image}
    </div>

    <div className="col ">
      <h2>{name}</h2>
      <Star stars={stars} reviews={reviews}/>
      <p>MRP:<del><FormatPrice price ={price + 250000}/></del></p>
      <h6>Deal of the day:<FormatPrice price ={price}/></h6>
      <p>{description}</p>

      <div className="d-flex flex-row gap-5 border-bottom border-primary">
      <span ><TbTruckDelivery className="fs-4"/>
      <p >free delivery</p>
       </span>
      <span ><TbReplace className="fs-4"/>
      <p>30 day back replacement</p></span>
      <span ><TbTruckDelivery className="fs-4"/>
      <p>sami delivered</p>
      </span>
      <span><MdSecurity  className="fs-4"/>
      <p>2 year warranty</p>
      </span>

       </div>

       <p>Available :<span className="fw-bold"> {stock >0 ? "In stock" : "Not Available"} </span></p>
       <p>ID :<span className="fw-bold">{id}</span></p>
       <p>BRAND :<span className="fw-bold">{company}</span></p>

    </div>

  </div>
 </div>
  </>);
};

export default SingleProduct;






// const Wrapper = styled.section`
//   .container {
//     padding: 9rem 0;
//   }
//   .product-data {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: center;
//     gap: 2rem;

//     .product-data-warranty {
//       width: 100%;
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       border-bottom: 1px solid #ccc;
//       margin-bottom: 1rem;

//       .product-warranty-data {
//         text-align: center;

//         .warranty-icon {
//           background-color: rgba(220, 220, 220, 0.5);
//           border-radius: 50%;
//           width: 4rem;
//           height: 4rem;
//           padding: 0.6rem;
//         }
//         p {
//           font-size: 1.4rem;
//           padding-top: 0.4rem;
//         }
//       }
//     }

//     .product-data-price {
//       font-weight: bold;
//     }
//     .product-data-real-price {
//       color: ${({ theme }) => theme.colors.btn};
//     }
//     .product-data-info {
//       display: flex;
//       flex-direction: column;
//       gap: 1rem;
//       font-size: 1.8rem;

//       span {
//         font-weight: bold;
//       }
//     }

//     hr {
//       max-width: 100%;
//       width: 90%;
//       /* height: 0.2rem; */
//       border: 0.1rem solid #000;
//       color: red;
//     }
//   }

//   .product-images {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     padding: 0 2.4rem;
//   }
// `;





