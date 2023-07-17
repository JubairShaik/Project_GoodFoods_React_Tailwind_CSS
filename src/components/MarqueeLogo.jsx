import React from 'react'
import Marquee from "react-fast-marquee";

import { Zomato , ubereats , Swiggy } from "../assets";



const MarqueeLogo = () => {
  return (

    <>
    <section className="mt-[4rem]  ">

    <div className="flex  md:flex-row  flex-col leading-[1px] gap-6   space-y-2
    
    justify-center">


   
    <div className="  text-orange-500 font-poppins  text-[1.4rem] p-2 sm:p-4">In Partnership With</div>
 

    </div>
    
    <Marquee  direction='left' gradient={false} speed={70} className="mb-14 " >

    <div className="flex  space-x-8 sm:space-x-14  items-center  ">
      <img className="h-[3.5rem] cursor-pointer hover:grayscale grayscale-0  "  src={Swiggy} alt="" />
      <img className="h-[7rem] cursor-pointer hover:grayscale   grayscale-0  "  src={Zomato} alt="" />
      <img className="h-[3.5rem] cursor-pointer hover:grayscale grayscale-0  "  src={Swiggy} alt="" />
      <img className="h-[7rem] cursor-pointer hover:grayscale  grayscale-0  "  src={Zomato} alt="" />
      <img className="h-[3.5rem] cursor-pointer hover:grayscale grayscale-0  "  src={Swiggy} alt="" />
      <img className="h-[7rem] cursor-pointer hover:grayscale  grayscale-0  "  src={Zomato} alt="" />
      <img className="h-[3.5rem] cursor-pointer hover:grayscale grayscale-0  "  src={Swiggy} alt="" />
      <img className="h-[7rem] cursor-pointer hover:grayscale  grayscale-0  "  src={Zomato} alt="" />
      
    </div>
     </Marquee>




    
    
    
    </section>

    </>
  )

}

export default MarqueeLogo
