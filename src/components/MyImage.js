import React from 'react'
import {useState} from 'react'
 

function MyImage({imgs}) {
    
    const [mainimage, Setmainimage] = useState(imgs[0]);
  return (
  <>
  
  
    <div className="container ">
    <div className="row">
    <div className="col d-flex flex-column">
        { imgs.map((curElem,index)=>{
                return(

                    <figure>
                        <img src={curElem.url} alt={curElem.filename} key={index} className="imagess" onClick={()=> Setmainimage(curElem)}/>
                    </figure>
                )
            })
        }
</div>
        <div className="col d-flex justify-content-center  ">
        <img src={mainimage.url} alt="" className="imagess1"/>
    </div>
       </div>
    </div>
   

   

  </>
  );
};

export default MyImage