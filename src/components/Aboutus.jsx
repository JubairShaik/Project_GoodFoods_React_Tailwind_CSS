import React,{useState} from 'react'
 
import {honey,cake} from '../assets'
import Billing from './Billing';
import Bussiness from './Bussiness';
import Navbar from './Navbar';

export const aboutusdata  = " Welcome to our restaurant where we bring you the best dining experience in town. Our restaurant GoodFoods is a foodies paradise that specializes in serving delicious food made from the freshest and finest ingredients.At our restaurant, we pride ourselves on our passion for food, impeccable service, and warm hospitality Our team of expert chefs has crafted a menu that features a wide variety of dishes from different cuisines, ensuring that there is something for everyone. Whether you're looking for a quick bite or a sumptuous meal, we have got you covered. That's why we have created a warm and welcoming ambiance that makes our guests feel right at home.Our staff is friendly and always ready to assist you in making your dining experience a memorable one.We are committed to using only the highest quality ingredients in our dishes, and we work with local farmers and suppliers to ensure that our food is always fresh and delicious."
//  Billing Bussiness
// child Component()
const Section = ({title,desc,isVisible,setIsVisible}) => {
  return(
   <div className={`sm:mt-6 mt-4 bg-slate-300 p-2 sm:p-3 rounded-1xl`}>
   <div className=" flex mx-0 items-center sm:mx-10 justify-between">
   <a href="#" onClick={()=>setIsVisible(true)} > <h2 className="font-poppins font-medium 
     text-sm md:text-4xl">{title}</h2>
   </a>

   { isVisible ?
     (
      <button onClick={()=>setIsVisible(false)} className=" transition-all  underline cursor-pointer">
     <img className="sm:h-8 h-5" src="https://cdn-icons-png.flaticon.com/512/4655/4655143.png" alt="" />
     </button>
     ):(
     <button onClick={()=>setIsVisible(true)} className="  underline cursor-pointer"> 
     <img className="sm:h-8 h-5" src="https://cdn-icons-png.flaticon.com/512/6364/6364586.png"  alt="" />
     </button>
     )
   }

   
   </div>

    {
      isVisible && <p className="font-poppins flex-1 transition-all   text-sm sm:text-lg  sm:mt-5 mt-2 bg-cyan-500 p-5" >{desc}</p>
    }

    </div> 
  )
}

// Parent Componenet 
const Aboutus = () => {
  
  // const [isVisible, setIsVisible] = useState(false)
  const [visibleSection, setVisibleSection] = useState("team")

  return (
<>

 

    <div className=" bg-primary  px-[2rem] h-full pb-[10rem] sm:px-[6rem]   ">
    <div  className="">
    <Navbar/>
 
    
    <Bussiness/>
    <Billing/>


    <div className="flex flex-wrap-reverse  mt-[1rem]  justify-around items-center">
    <h2 className="textorang font-bold text-[2rem] sm:text-[6rem] sm:leading-[100px] leading-[50px] font-poppins  z-10" >Know <br className=" sm:flex hidden"/> About Us</h2>
    <img className=" w-full sm:w-[40%]  " src={cake} alt="" />
    </div>
    <p className="text-cyan-500 mt-10 sm:text-[1.4rem] text-[1rem] font-light sm:font-medium font-poppins sm:font:semi-bold" >
     {aboutusdata}
    </p>

    <div className="flex flex-col md:flex-row items-center gap-10  mt-10 justify-between">
    <img className="sm:w-[40%] w-full  " src={honey} alt="" />
    <p className="text-cyan-500 sm:text-[1.4rem] text-[1rem] font-light sm:font-medium font-poppins sm:font:semi-bold" >
     {aboutusdata}
     
    </p>
    </div>
    
   

    



    <h2 className="textorang font-bold text-[2rem] sm:text-[3.4rem] font-poppins  z-10" >Know more....</h2>

    <Section
    title={"About InstaMart"}
    desc={"We understand that dining out is not just about the food, it's about the entire experience. That's why we have created a warm and welcoming ambiance that makes our guests feel right at home. Our staff is friendly and always ready to assist you in making your dining experience a memorable one. We are committed to using only the highest quality ingredients in our dishes, and we work with local farmers and suppliers to ensure that our food is always fresh and delicious."}
    isVisible={visibleSection==="about"}
    setIsVisible={()=>setVisibleSection("about")}
    />
    <Section
    title={"Team InstaMart"}
    desc={"we are constantly exploring new ways to reduce our carbon footprint. At our restaurant, we believe that food is not just nourishment for the body, but also for the soul. We are passionate about creating a dining experience that is not just about the food, but also about the memories that are made around the table.Thank you for considering our restaurant, and we look forward to welcoming you soon"}
    isVisible={visibleSection==="team"}
    setIsVisible={()=>setVisibleSection("team")}
    />
    <Section
    title={"Careers"}
    desc={"We are passionate about creating a dining experience that is not just about the food, but also about the memories that are made around the table.Thank you for considering our restaurant, and we look forward to welcoming you soon"}
    isVisible={visibleSection==="career"}
    setIsVisible={()=>setVisibleSection("career")}
    />
    </div>
      
    </div>

    </>

  )
}

export default Aboutus;






































































































{/*


<h2 className=" font-poppins font-semibold text-[2rem]"> Shaik Jubair Ahmed</h2>
        <p className="font-poppins">
        I Am a Frontend Developer 
        </p>
        <h3 id="apidata" className="md:text-[3rem]  font-bold font-poppins text2 text-[1.6rem]
        text-slate-500 my-5 "> Hello There Mr.Foodiee</h3>
    

*/}