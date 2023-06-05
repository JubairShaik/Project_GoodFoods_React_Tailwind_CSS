import React from 'react'
import { useSelector ,useDispatch} from "react-redux";
import Fooditem from './Fooditem';
import Footer from './Footer';
import { clearCart } from "../utils/cartSlice"; 
import emptycart   from "../assets/emptycart.png"; 
import Navbar from './Navbar';
 
const Cartpage = () => {

  const dispatch = useDispatch();

  const cartItems = useSelector(store => store.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <>
      <section className="bg-primary  text-white px-[1rem] sm:px-[10rem]">

      <Navbar/>
        <div className="w-full h-full gap-5 items-center flex-wrap font-poppins flex justify-center py-3">
          <h2 className="text-4xl my-3 font-semibold sm:text-5xl  text-blue-600">Lets Gets Exported</h2>
        </div>

        <p className="font-bold font-poppins text-green-400 text-[1.5rem] sm:text-[3rem]">Total CartItems - {cartItems.length}</p>

        <div className="flex items-center justify-center ">
          <div className="flex flex-wrap justify-center gap-10 p-4">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <Fooditem key={item.id} {...item}/> 
              ))
            ) : (
              <div className="flex flex-col  items-center justify-center">
                <img src={emptycart} className="h-[180px] items-center" alt="" />
                <h2 className="text-[1.5rem] mt-4  sm:text-[2rem] text-red-500 font-poppins ">Your Cart is Empty</h2>
              </div>
            )}
          </div>
        </div>

        <div className="w-auto mt-10 mx-auto justify-center flex">
          <button 
            onClick={() => handleClearCart()}
            className="bg-red-500 text-[1.2rem] rounded-xl text-white  sm:py-[.9rem] py-[.6rem] sm:px-[5rem] px-[5rem] font-medium text-center font-poppins"
          >
            Clear Cart
          </button>
        </div>

        <Footer/>
      </section>
    </>
  )
}

export default Cartpage
