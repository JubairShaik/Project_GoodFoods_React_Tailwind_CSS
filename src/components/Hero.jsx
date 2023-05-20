// import React from 'react'
import {discount ,burgur} from '../assets';
import styles from '../style' ;
import GetStarted from './GetStarted'
import UserContext  from "../utils/userContext"
import { useContext } from "react";
 
const Hero = () => {

  const {user} = useContext(UserContext);

  return(
  
    <section id="home"
     className={`flex lg:flex-row flex-col sm:mt-10 mt-6
     `}>
  {/* -------LeftSidePArt------------ */}
      <div className={`flex-4 ${styles.flexStart}
      flex-col xl:px-0 sm:px-16 px-6 `}>

      <p className="sm:text-[35px]  animate-bounce p-3 text-sm  font-medium  font-poppins  textorang sm:font-bold">Hello , {user.name}</p>

        <div className="flex flex-row  items-center py-[6px] mb-2
        px-4 bg-discount-gradient rounded-[10px] space-x-4 ">

          <img src={discount} alt=""
          className="w-[34px] h-[34px]" />
          
          <p className={`${styles.paragraph} ml-2`}>

          <span className="text-white mr-2">70%</span>Discount {" "}
          
          <span className="text-white"> On Your </span> 1st Delivery
           </p>

        </div>

        <div className="flex w-full flex-row 
        justify-between items-center">
          <h1 className= "flex-1 font-poppins
           font-semibold ss:leading-[90px] leading-[75px]
            text-white text-[52px] ss:text-[72px]">
               Welcome to <br className="sm:block hidden"/>{" "}
          <span className="textorang">BrandNew</span>  {" "}            
            </h1>
            <div className="ss:flex hidden md:mr-4 mr-0">

            <GetStarted/>

            </div>

        </div>

        <h1 className= " font-semibold w-full
            ss:leading-[100px] leading-[75px]
            text-white text-[42px] font-poppins ss:text-[70px]">
              Restaurant
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
        <h3 id="apidata" className="md:text-[3rem] textorang font-bold font-poppins text2 text-[1.6rem]
        text-slate-500 my-5 ">Always Available.......</h3>


      </div>
















      
   {/* ----------RightSidePart-------------*/}

   <div className={` flex-1 ${styles.center} md:my-0 my-12  relative`}>
    <img src={burgur} alt="billing"  className="w-[100%] h-[100%] z-[5]
    relative  " />
    <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
    <div className="absolute z-[1] w-[80%] h-[65%] rounded-full bottom-40 white__gradient"/>
    <div className="absolute z-[2] w-[50%] h-[85%] bottom-[70px] right-[100px]  orange"/>
     
   </div>

   <div className={`ss:hidden ${styles.flexCenter}`  }>

    <GetStarted/>

   </div>


     </section>

    
  )
}


export default Hero