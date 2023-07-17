// import React from 'react'
import {discount ,burgur} from '../../assets';
import styles from '../../style' ;
 
// import UserContext  from "../utils/userContext"
import { useContext } from "react";
 
const Hero = () => {

  // const {user} = useContext(UserContext);

  return(
  
    <section className="flex lg:flex-row flex-col  mt-14 md:mt-3 ">


  {/* -------LeftSidePArt------------ */}
    <div className={`flex-4 ${styles.flexStart}
      flex-col xl:px-0 sm:px-16 px-6 `}>

      <div
      data-aos="fade-down" data-aos-duration="900" data-aos-delay="900"

      >
        <div 
      
        className="flex flex-row  items-center py-[6px] mb-2
        px-4 bg-discount-gradient rounded-[10px] space-x-4 ">

          <img src={discount} alt=""
          className="w-[34px] h-[34px]" 
        
          />
          
          <p className={`${styles.paragraph} ml-2`}>

          <span className="text-white mr-2">50%</span>off {" "}
          
          <span className="text-white"> On Your </span> 1st Delivery
           </p>

        </div>
        </div>

        <div
        data-aos="fade-up" data-aos-duration="900" data-aos-delay="900"

        >

         <div className="flex w-full mt-5 flex-row 
            justify-between gap-10 items-center">
           <h1 className= "flex-1 font-poppins
             font-semibold ss:leading-[90px] leading-[65px]
            text-white text-[52px] ss:text-[72px]">
            DeliciousEats<br className="sm:block hidden"/>{" "}
            <span className="textorang"> Delivered</span>  {" "}            
            </h1>


            <div className="ss:flex hidden md:mr-4 mr-0">

         

            </div>

        </div>
             <h1 className= " font-semibold w-full
            ss:leading-[100px] leading-[75px]
            text-white text-[42px] font-poppins ss:text-[70px]">
             with Love
        </h1>


        </div>


        <div
        data-aos="fade-up" data-aos-duration="900" data-aos-delay="900"

        >
        <p className={`${styles.paragraph} text-justify max-w-[600px] mt-5`}>
        Introducing GoodFoods, the ultimate destination for food
         lovers seeking delicious meals conveniently delivered to 
         their doorstep. With an extensive range of mouthwatering dishes 
         sourced from top local restaurants, prepared with utmost passion
          and delivered with utmost care, we bring you a
         diverse culinary experience like no other.
        </p>
   
      
        </div>
      </div>




      
   {/* ----------RightSidePart-------------*/}

   <div className={` flex-1 ${styles.center}  md:my-0 my-12  relative`}>
    <div   className="z-[100px]" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="800" >
    <img 
    src={burgur} alt="billing"  className="w-[100%] h-[100%]  
    relative  " />
    </div>
    <div 
      data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="1200"
    className="absolute z-[2] w-[66%] h-[85%] bottom-[70px] right-[100px]  orange"/>
     
    </div>



     </section>

    
  )
}


export default Hero