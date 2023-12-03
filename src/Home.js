import React from 'react'
import HeroSection from "./HeroSection";
import Trusted from "./Trusted";
import Services from "./Services";
import FeatureProduct from "./components/FeatureProduct";


function Home() {
  const data={
    name:"Thapa store",
  };
  return (
    <>
    <HeroSection props={data}/>
    <FeatureProduct/>
    <Services/>
    <Trusted/>
      
    </>
  )
}

export default Home;