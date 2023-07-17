import { useState, useContext } from "react";
import { close,  menu } from "../../assets";
import { navLinks } from "../../constants";
// import UserContext  from "../utils/userContext"
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
// import { useAuth0 } from "@auth0/auth0-react";
// import { Link } from 'react-router-dom';
// // import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';



const Navbar = () => {
 
  // const { user,  logout ,loginWithRedirect ,isAuthenticated, isLoading } = useAuth0();


  const [active, setActive] = useState("Home");  
  const [toggle, setToggle] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(true);

 const cartItems = useSelector(store => store.cart.items);

  return (

    
    <nav className="    
     justify-between items-center  flex   py-6 font-poppins navbar">

     <Link to= "/" >
       <span className="title text-[1.6rem] font-bold text-orange-500 sm:text-[2rem]">Good<span className="text-yellow-500">Foods</span></span>
     </Link>
  
      <div className="flex  items-center gap-5" >
      <div className=" text-white flex relative ">
      <Link to="/Cartpage"> 
      <img className="h-9 sm:h-10" src="https://cdn-icons-png.flaticon.com/512/4903/4903884.png" 
      alt=""  />
      </Link> 
       <div className="relative cursor-pointer flex  justify-center">
          <p className="absolute select-none -left-5 -sm:left-2  justify-center flex sm:h-5 sm:w-5 w-4 h-4  
           bg-yellow-500 text-black  text-[15px] rounded-full items-center">{cartItems.length}</p>
       </div>
    </div>

      <div>
        {/* use conditional rendering for login and logout */}
     {isLoggedin ? (
          <Link to="/login">
          <button className="bg-orange-500  text-white px-[4px] py-[1px] md:px-[25px] md:py-[6px]  rounded-md  font-poppins" onClick={() => setIsLoggedin(false)}>Login</button>
          </Link>
      ) : (
         <button className="bg-red-500  px-[4px] py-[1px]  rounded-md  font-poppins" onClick={() => setIsLoggedin(false)}>Logout</button>
     )}
      </div>
   
      </div>

 
  
    
    
         
  </nav>
  );
};

export default Navbar;





 