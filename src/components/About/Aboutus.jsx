import React, { useState } from "react";

import { girl, cake } from "../../assets";

import {Billing, Bussiness, Navbar, QnA, Footer } from '../index.js';



import Aboutme from './Aboutme';





 

const Section = ({ title, desc, isVisible, setIsVisible }) => {
  return (
    <div className={`sm:mt-6 mt-4 bg-slate-300 p-2 sm:p-3 rounded-1xl`}>
      <div className=" flex mx-0 items-center sm:mx-10 justify-between">
        <a href="#" onClick={() => setIsVisible(true)}>
          {" "}
          <h2
            className="font-poppins font-medium text-sm md:text-4xl"
          >
            {title}
          </h2>
        </a>

        {isVisible ? (
          <button
            onClick={() => setIsVisible(false)}
            className=" transition-all  underline cursor-pointer"
          >
            <img
              className="sm:h-8 h-5"
              src="https://cdn-icons-png.flaticon.com/512/4655/4655143.png"
              alt=""
            />
          </button>
        ) : (
          <button
            onClick={() => setIsVisible(true)}
            className="  underline cursor-pointer"
          >
            <img
              className="sm:h-8 h-5"
              src="https://cdn-icons-png.flaticon.com/512/6364/6364586.png"
              alt=""
            />
          </button>
        )}
      </div>

      {isVisible && (
        <p className="font-poppins flex-1 transition-all   text-sm sm:text-lg  sm:mt-5 mt-2 bg-cyan-500 p-5">
          {desc}
        </p>
      )}
    </div>
  );
};

// Parent Componenet
const Aboutus = () => {
  // const [isVisible, setIsVisible] = useState(false)
  const [visibleSection, setVisibleSection] = useState("team");

  return (
    <>
      <div className=" bg-primary  px-[1.4rem] h-full   sm:px-[6rem]   ">
        <div className="">
          
          <Navbar />
{/* 
          <Aboutme/> */}
          {/* <Billing /> */}
          <Bussiness />


          <h2 className=" font-poppins font-semibold text-[2rem]"> Shaik Jubair Ahmed</h2>
        <p className="font-poppins">
        I Am a Frontend Developer 
        </p>
          <h3  className="md:text-[3rem]  font-bold font-poppins  text-[1.6rem] text-slate-500 my-5 "> Hello Foodiees</h3>
          
          <p className="text-cyan-500 mt-5 sm:text-[1.4rem] text-justify text-[1.25rem] font-light sm:font-medium font-poppins sm:font:semi-bold">
          Welcome to our <span className="text-orange-500 " >
          restaurant  
            </span> where we bring you the best dining experience in town. Our restaurant <span className="text-yellow-500" >GoodFoods</span> is a foodies paradise that specializes in serving delicious food made from the freshest and finest ingredients.
            
            <br/>
            <br/>
            At our restaurant, we pride ourselves on our passion for food , impeccable service, and warm hospitality Our team of expert chefs has crafted a menu that features a wide variety of dishes from different cuisines, ensuring that there is something for everyone. Whether you're looking for a quick bite or a sumptuous meal, we have got you covered. 
            <br/>
            br
            That's why we have created a warm and welcoming ambiance that makes our guests feel right at home.Our staff is friendly and always ready to assist you in making your dining experience a memorable one.We are committed to using only the highest quality ingredients in our dishes, and we work with local farmers and suppliers to ensure that our food is always fresh and delicious.
          </p>

        


          <Footer/>

          
        
          

         
        
        </div>
      </div>
    </>
  );
};

export default Aboutus;

 