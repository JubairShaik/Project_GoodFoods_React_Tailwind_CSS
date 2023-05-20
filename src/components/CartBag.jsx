import React from 'react';
import { useSelector } from "react-redux";
import {Provider} from "react-redux";


const CartBag = () => {

    
  const cartItems = useSelector(store => store.cart.items);


  return (
  
    <div className=" text-white   flex relative "> 
    <img  className="h-10" src="https://cdn-icons-png.flaticon.com/512/4903/4903884.png" 
     alt="cartImage"/>
    <div className="relative cursor-pointer -left-4 flex  justify-center">
        <p className="abosolute select-none  justify-center flex h-5 w-5  text-black bg-blue-100
         rounded-full items-center">{cartItems.length}</p>
    </div>
    </div>
  )
}

export default CartBag
