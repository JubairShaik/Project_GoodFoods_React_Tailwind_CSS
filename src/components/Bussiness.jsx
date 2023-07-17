import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

import { girl } from "../assets";



const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[21px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Bussiness = () => {
  return (
    <>
      <div>
        <h2 className="text-gradient text-[2.3rem] sm:text-[3.4rem] text-center font-poppins">
         About Bussiness
        </h2>
      </div>

      <section id="features" className={layout.section}>

        
    
        <div className={layout.sectionInfo}>
          <div className={`${layout.sectionImg} flex-col`}>
            {features.map((feature, index) => (
              <FeatureCard key={features.key} {...feature} />
            ))}
          </div>
        </div>

        <div className={`${layout.sectionInfo}  `}>
          <img className=" h-full sm:h-[460px] relative "  src={girl} alt="" />
        <div 
      data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="1200"
      className="absolute z-[2] w-[66%] h-[85%] bottom-[70px] right-[100px]   sm:w-[16%] sm:h-[25%] sm:bottom-[30px] sm:right-[10px]  orange"/>
      </div>
     
  

      </section>
    </>
  );
};

export default Bussiness;

