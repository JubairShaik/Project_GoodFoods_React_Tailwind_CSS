import { useState, useContext } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
// import UserContext  from "../utils/userContext"
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
// import { useAuth0 } from "@auth0/auth0-react";
// import { Link } from 'react-router-dom';



const Navbar = () => {
 
  // const { user,  logout ,loginWithRedirect ,isAuthenticated, isLoading } = useAuth0();


  const [active, setActive] = useState("Home");  
  const [toggle, setToggle] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(true);

 const cartItems = useSelector(store => store.cart.items);

  return (

    
    <nav className="w-full flex  z-10 py-6
     justify-between items-center gap-5 font-poppins navbar">

     <span className="title text-[1.1rem] font-bold text-orange-500 sm:text-[2rem]">GoodFoods</span>
  
      <div className=" text-white flex relative ">
      <Link to="/Cartpage"> 
      <img className="h-9 sm:h-10" src="https://cdn-icons-png.flaticon.com/512/4903/4903884.png" 
      alt=""  />
      </Link> 
      <div className="relative cursor-pointer flex  justify-center">
          <p className="absolute select-none -left-5 -sm:left-2  justify-center flex sm:h-5 sm:w-5 w-4 h-4  
           bg-blue-500 text-white  text-[15px] rounded-full items-center">{cartItems.length}</p>
      </div>

      

      </div>

      <div>
        {/* use conditional rendering for login and logout */}
     {isLoggedin ? (
          <Link to="/login">
          <button className="bg-orange-500  px-[4px] py-[1px]  rounded-md  font-poppins" onClick={() => setIsLoggedin(false)}>Login</button>
          </Link>
      ) : (
         <button className="bg-red-500  px-[4px] py-[1px]  rounded-md  font-poppins" onClick={() => setIsLoggedin(false)}>Logout</button>
    )}


      </div>
   


      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}


      </ul>
            

    
      {/**
        isAuthenticated ? (
          <button 
          className="bg-red-500  px-[2px]  sm:text-[16px] ml-4  sm:ml-10 text-[13px] sm:px-[5px] py-[1px]  rounded-md  font-poppins"
          onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>

        ):(
      <button 
      className="bg-red-500  px-[2px]  sm:text-[16px] ml-4  sm:ml-10 text-[13px] sm:px-[5px] py-[1px]  rounded-md  font-poppins"
      onClick={() => loginWithRedirect()}>Log In</button>
        )
         
     */}
  
    
    
         {/*Mobile Menu*/}
  
         <div className="sm:hidden flex flex-1 justify-end items-center">
         <img
           src={toggle ? close : menu}
           alt="menu"
           className="w-[25px] h-[25px] object-contain"
           onClick={() => setToggle(!toggle)}
         />
 
         <div
           className={`${
             !toggle ? "hidden" : "flex"
           } p-4 bg-black-gradient z-10  absolute top-20 w-full left-0 justify-center  my-2 min-w-[10px] rounded-xl sidebar`}
         >
           <ul className="list-none flex  items-center  flex-col">
             {navLinks.map((nav, index) => (
               <li
                 key={nav.id}
                 className={`font-poppins  font-medium cursor-pointer text-[18px] ${
                   active === nav.title ? "text-white" : "text-dimWhite"
                 } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                 onClick={() => setActive(nav.title)}
               >
                 <a href={`#${nav.id}`}>{nav.title}</a>
               </li>
             ))}
           </ul>
         </div>
       </div>
    </nav>
  );
};

export default Navbar;





 