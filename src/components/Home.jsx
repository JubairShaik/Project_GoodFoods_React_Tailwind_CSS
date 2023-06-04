import React,{useEffect} from 'react'
import CardDeal from './CardDeal';
import Testimonials from './Testimonials';
import Clients from './Clients';
import CTA from './CTA';
import Footer from './Footer';
import QnA from './QnA';
import "aos/dist/aos.css";
import AOS from "aos";
import styles from "../style.js" ;
import Navbar from './Navbar';
import Header from './Header';
import Stats from './Stats';
import Body from './Body';
import Hero from './Hero';
// Body
// Stats
// Navbar
// Header
// Footer
// CardDeal
// Testimonials
//  Clients
//  CTA

const Home = () => {


    useEffect(() => {
        AOS.init({
          once: false,
        });
      });
      
  return (
    <>

    <div className="bg-primary md:px-[3rem]  w-full overflow-hidden"> 
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} `}>
        <div data-aos="fade-down" data-aos-duration="800" data-aos-delay="800"> 
          <Navbar/>
        </div>
           <Hero/>
      </div>
    </div>    
     

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
       
     <div data-aos="fade-up" data-aos-duration="400" data-aos-delay="600">
      <Header/>
     </div>
   

     <div data-aos="fade-down" data-aos-duration="400" data-aos-delay="300">
      <Stats />
     </div>



     <div data-aos="fade-up" data-aos-duration="400" data-aos-delay="500">
       <Body/> 
     </div>
       


      </div>
    </div>

  </div>


   
    
    </>
  )
}

export default Home