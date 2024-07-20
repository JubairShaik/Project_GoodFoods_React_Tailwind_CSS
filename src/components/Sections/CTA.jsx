import React from "react";
import {Button , GetStarted }from "@components";

import styles from "@style";
 


const CTA = () => (
  <section
    className={`${styles.flexCenter}  ${styles.marginY}  ${styles.padding} 
    sm:flex-row flex-col bg-black-gradient-2  z-[10] rounded-[20px] box-shadow `}
  >
    <div className="flex-1 flex flex-col  ">
      <h2 className={`text-[21.6px] md:text-[39px] font-poppins text-yellow-500 font-semibold `}>Place Your First Order 🚀</h2>

      <p className={`${styles.paragraph}   md:text-start text-center  my-5 sm:my-2`}>
        Delicious <span className="text-yellow-500" >Eats</span> Delivered with Love ❤️
      </p>
    </div>

    <GetStarted />
  </section>
);

export default CTA;
