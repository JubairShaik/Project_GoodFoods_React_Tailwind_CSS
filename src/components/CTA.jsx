import React from "react";
import Button from "./Button";
import styles from "../style";
import GetStarted from "./GetStarted";

const CTA = () => (
  <section
    className={`${styles.flexCenter}  ${styles.marginY}  ${styles.padding} 
    sm:flex-row flex-col bg-black-gradient-2  z-[10] rounded-[20px] box-shadow `}
  >
    <div className="flex-1 flex flex-col  ">
      <h2 className={`text-[25px] font-poppins text-yellow-500 font-semibold `}>Place Your First Order 🚀</h2>

      <p className={`${styles.paragraph} max-w-[470px] text-center  my-5`}>
        Delicious <span className="text-yellow-500" >Eats</span> Delivered with Love ❤️
      </p>
    </div>

    <GetStarted />
  </section>
);

export default CTA;
