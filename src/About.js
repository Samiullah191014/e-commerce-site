import React, { useContext } from 'react'
import HeroSection from "./HeroSection";
import { useProductContext } from "./context/productcontex";

function About() {
  const {myName} = useProductContext();

  const data={
    name:"Thapa Eccomerce",
  };
  return (<>
  {myName}
    <HeroSection props={data}/>
  </>)
}

export default About









