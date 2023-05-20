import React from 'react'
import Button from './Button';
import styles from '../style'

const CTA = () => (
<section className={`${styles.flexCenter}  ${styles.marginY}  ${styles.padding} 
    sm:flex-row flex-col bg-black-gradient-2  z-[10] rounded-[20px] box-shadow `} >

       <div className="absolute mb-10 z-[0] w-[50%] h-[60%]  -left-[50%] orange__gradient rounded-full "/>

        <div className="flex-1 flex flex-col  ">
          
           <h2 className={styles.heading2}>
               Try Our Service Now !
          </h2>

            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                     We Serve The Best Food In The WholeTown .....
          
            </p>

        </div>




    
    <Button className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt:10 `} />
  </section>
) 


export default CTA