import React from 'react'
import { lemon } from "../assets";
import Button from './Button';
import styles, {layout} from '../style';


const CardDeal = () => {
  return (
     <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
        Discover the best food & <br className="sm:block hidden" /> drinks in 
        nearest Restaurant
       </h2>
       <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       The quality of the food and service is consistently top-notch, and I always leave feeling satisfied and happy.
       </p>
       <button type="button" className={`py-3 mt-10 px-6 
       bg-yellow-gradient text-[18px] font-poppins rounded-lg`} >
         Gets Started
       </button>
    </div>
    <div className={layout.sectionImg}>
      <img src={lemon} alt="billing" className="w-[100%] h-[100%]" />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[100%] h-[50%] rounded-full blue__gradient"/>
      <div className="absolute z-[2] w-[50%] h-[85%] bottom-[70px] right-[100px]  yellow"/>
    </div>




     </section>
  )
}

export default CardDeal