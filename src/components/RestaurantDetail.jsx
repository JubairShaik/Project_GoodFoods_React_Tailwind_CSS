import React from 'react'
import { useParams } from 'react-router-dom';
import {useEffect,useState} from 'react';
import {mainId ,swiggy_menu_api_URL } from './constants'
import Shimmer from './Shimmer';
import Footer from "./Footer";
import  {addItem,removeItem} from '../utils/cartSlice';
import { useDispatch } from 'react-redux';
import CartBag from './CartBag';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Navbar from '../components/Header/Navbar';
 

 
 const RestaurantDetail = () => {

     const {resId} = useParams();

     const [restaurants, setRestaurants] = useState([]);
     

     useEffect(() => {
        getRestaurantInfo();
     }, []);


    {/*Adding Items Into Cart*/}
     const dispatch = useDispatch();

     const addFoodItem = (item)=>{
         
         dispatch(addItem(item))
        }
        
        const removeFoodItem = ()=>{
            
            dispatch( removeItem([]))
            
     }
        
     const cartItems = useSelector(store => store.cart.items);
        
        
    
    
     async function getRestaurantInfo() {
       
         try{
            const data = await fetch(swiggy_menu_api_URL+resId);
            const json = await data.json();
            setRestaurants(json?.data);
          } catch (error) {
            console.log(error);
          }


         
    }
  return restaurants.length === 0 ? (<Shimmer/>):(

 <>

 
 <section className={``}>
<div className="sm:px-[10rem]   fixed w-full bg-gray-800 px-[.3rem]">

<Navbar />
</div>
 
<div className=" w-full font-poppins pt-[15rem] sm:pt-10  bg-primary ">

<div className="textorang space-x-5 font-extrabold items-center justify-center flex  ">
 

 
</div>

   <div className="  sm:mt-12  p-[2rem] sm:p-[3rem] flex-col sm:flex-row flex gap-3 justify-center h-[20rem] text-white">
    <img className="h-full shadow-inner rounded-3xl" src={mainId+ restaurants.cloudinaryImageId} alt="image" />
    <div className="flex  justify-center  flex-col">
        <h3 className="sm:text-[3rem] text-[2rem]" >{restaurants.name}</h3>
        <h3 className=" text-2xl sm:text-4xl text-yellow-500">price : {restaurants.costForTwoMsg}</h3>
 
         <button onClick={()=>handleAddItem()} 
        className="text-white h-8  bg-green-500 sm:my-3  my-10"> Buy Now</button>
     </div>
    </div> 



   <div className="sm:mx-[10rem] sm:mt-[2rem]  mt-[10rem] mx-[1rem]" >
   <div className="font-extrabold justify-center text-gradient flex
    items-cente sm:text-[5rem] my-14 mt-[5rem] text-[1.3rem]">
   All Menu Items
   </div>

   <div>
   <ul className="  grid grid-cols-2 md:grid-cols-4  
    gap-[1rem]  mx-3  flex-wrap-reverse   font-poppins">{
    Object.values(restaurants?.menu?.items).map((item)=>
    <li className="flex p-2 rounded-2xl bg-cyan-900  
    flex-col items-center justify-center" key={item.id}>
    <div className=" text-slate-300 cursor-pointer sm:h-full sm:w-full rounded-xl flex flex-col items-center  ">
    <img className= "rounded-xl" src={mainId+item?.cloudinaryImageId} alt="" />
    <div className="flex flex-col">
    <span className=" text-yellow-500  font-extralight sm:text-xl text-sm">{item.name}</span>
    <span className=" text-slate-400 text-sm font-thin" > {item.category} </span>
    
    <div className="  w-full flex flex-col  sm:flex-row justify-center p-1 sm:my-1  my-0 gap-1 sm:gap-4">
        <button  onClick={()=>{addFoodItem(item)}} className="bg-green-500  p-1 text-sm rounded-md">Add  item</button>
        <button  onClick={()=>{removeFoodItem(item)}} className="bg-red-500  sm:p-2  p-1 text-sm rounded-md">Remove item</button>
    </div>
   
     </div>
    </div>
    </li>
    )
 }
</ul>
   </div>
    
   </div>
   <Footer/>



    
</div>



 </section>




</>

  
  )
}

export default RestaurantDetail;

 

{/*
 <div>
     <h1>Menu Items</h1>
     <ul>{
         Object.values(restaurants.menu.items).map((item)=><li key={item.id}>{item.name}</li>)
     
    
    }</ul>
      
     </div>
  const handleRemoveItem = ()=>{
        dispatch( removeItem([]))
    }


     
 
*/}