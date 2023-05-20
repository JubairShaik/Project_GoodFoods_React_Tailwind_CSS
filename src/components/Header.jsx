import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" h-full  font-poppins w-full">
      <div className="flex my-10 sm:my-14 ">
            <ul className="list-none flex-col sm:flex-row text-l font-bold flex  gap-[2rem] sm:gap-[4rem]">
            <Link className="flex text-l gap-3 sm:gap-5  items-center text-yellow-400"  to="/Aboutus">Click Here
               <li className="bg-slate-700 px-5 py-2  text-sm  sm:text-medium rounded-xl text-white">Know About Us</li>
            </Link>

            <Link className="flex text-l gap-3 sm:gap-5 items-center text-yellow-400"  to="/contactus"> 
               <li className="bg-slate-700 px-5 py-2  rounded-xl text-sm  sm:text-medium  text-white">Conatact Us</li>
            </Link> 
            </ul>
      </div>
    </div>
  )
}

export default Header







{/*


 // <Link className="flex text-l gap-6 items-center text-yellow-400"  to="/RestaurantDetail/34">Click Here
            //    <li className="bg-slate-700 p-2 rounded-xl text-white">Items Page</li>
            // </Link> 

*/}






// what we Learn In This 

{/*

            <Link className="flex text-l gap-6 items-center text-yellow-400"  to="/Aboutus">Click Here
             <li className="bg-slate-700 p-2 rounded-xl text-white">Aboutus</li>
            </Link>

            <a className="flex text-l gap-6 items-center text-yellow-400" href="/Apidata">Click Here
             <li className="bg-slate-700 p-2   rounded-xl text-white">All Items</li>
            </a>          
            <a className="flex text-l gap-6 items-center  text-yellow-400" href="/Contactus">Click Here
             <li className="bg-slate-700  p-2 rounded-xl text-white">Get In Touch</li>



               <Link className="flex text-l gap-3 sm:gap-5  items-center text-yellow-400" to="/Apidata">Click Here
               <li className="bg-slate-700 p-2 rounded-xl text-white">Explore All Items</li>
            </Link>

*/}