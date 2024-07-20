import React from 'react'
import { feedback} from '@constants';
import styles, {layout} from '@style';
import {FeedbackCard,GetStarted} from '@components'
 

const Testimonials = () => {
  return (
    <section id="clients" className={` ${styles.paddingY}
             ${styles.flexCenter} flex-col relative `}>
       

      <div className="absolute z-[0] w-[60%] h-[60%]
      -right-[50%] rounded-full blue__gradient"/>

      <div className="w-full items-center  md:flex-row
      flex-col  mb-6 sm:mb-18 z-[1] flex justify-between " >

        
        <h1 className={styles.heading2}>
        What People are
        <br className="sm:block hidden " />
        saying about us
        </h1>
         

      </div>

      <div className="flex flex-wrap justify-center sm:justify-start
      feed-back-container relative  z-[1] ">
        {feedback.map((card)=>(
          <FeedbackCard key = {card.id} {...card}/>

        ))}
      </div>

  
    </section>

     
  )
}

export default Testimonials