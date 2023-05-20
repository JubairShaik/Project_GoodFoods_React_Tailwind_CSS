import React from 'react'
import { useSelector ,useDispatch} from "react-redux";
import Fooditem from './Fooditem';
import Footer from './Footer';
import { clearCart } from "../utils/cartSlice"; 
 
const Cartpage = () => {

  const dispatch = useDispatch();

  const cartItems = useSelector(store => store.cart.items);

  const handleClearCart = ()=>{
    dispatch(clearCart())

  }
  return (
    <>
    <section className="bg-primary px-[1rem] sm:px-[10rem]   ">
    <div className="w-full h-full  gap-5 items-center 
     flex-wrap font-poppins flex justify-center  py-3">
    <h2 className="text-2xl my-3 sm:text-5xl text-blue-600 ">Lets Gets Exported</h2>
    </div>



    <p className="font-bold  font-poppins text-green-400 text-[1.5rem] sm:text-[3rem]  ">Total CartItems - {cartItems.length}</p>

     <div className="flex  ">
     <div className="flex flex-wrap  justify-center gap-10 p-1">
    {cartItems.map((item)=>(
      <Fooditem key={item.id} {...item}/> 
   ))}
   
     </div>

    
     </div>
     <div className="w-auto mt-10  mx-auto justify-center flex ">
     <button 
     onClick={() => handleClearCart()}
     className="bg-red-500 rounded-xl sm:py-[.9rem] py-[.3rem] sm:px-[5rem] px-[1.3rem] font-medium 
     text-center font-poppins "> Clear Cart </button>
     </div>
    <Footer/>
    </section>
    </>

  )
}

export default Cartpage
