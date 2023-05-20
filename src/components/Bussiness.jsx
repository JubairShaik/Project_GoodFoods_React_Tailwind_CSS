import React from 'react'
import {features} from '../constants';
import styles,{layout} from '../style';
import Button from './Button';



const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
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
<h2 className="text-gradient text-[4rem] text-center font-poppins">Bussiness</h2>

</div>

    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>You do the business,
          <br className="sm:block hidden"/>
               we’ll handle the money.
               
        </h2>
          <p className={`${styles.paragraph} max-w-[470px] first-letter:mt-5`}>
             With the right credit card, you can improve
              your financial life by building credit, earnin
             g rewards and saving money. But with hundreds o
              f credit cards on the market.
          </p>

          <Button/>




      </div>


      <div className={layout.sectionInfo}>
        
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={features.key} {...feature}  />
      ))}
    </div>
</div>






    </section>

    </>

  )
}

export default Bussiness