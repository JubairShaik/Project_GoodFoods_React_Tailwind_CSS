import styles from "@style";
 
import { footerLinks, socialMedia } from "@constants";
import {useContext } from "react";
import { Link } from 'react-router-dom';
 
const Footer = () => {

  const Year = new Date().getFullYear()

 
  return(
  
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-[1] flex flex-col justify-start  mr-10">
        <Link to="/" 
        onClick={()=>{window.scrollTo(0,0)}}
        >
            <span className="text-[2rem] font-bold  font-poppins text-orange-400">GoodFoods</span>
        </Link>
          <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
                 Come taste the magic at GoodsFoods - where every bite is a love potion.
          </p>
        </div>
  
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerlink) => (
            <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
        
                <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerlink.title}
                </h4>
         
              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
  
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright Ⓒ {Year}  <span className="font-medium cursor-pointer  text-yellow-500" >GoodsFoods </span> All Rights Reserved.
        </p>
       
  
        
      </div>
    </section>
  );
}


export default Footer;

 