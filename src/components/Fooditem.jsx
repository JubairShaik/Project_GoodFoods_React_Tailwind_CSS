import React from 'react'
import { mainId } from './constants';


const Fooditem = (
    {name,area,cloudinaryImageId,price, description,category}
) => {
  return (
    <>
    <div className="sm:w-[23rem] w-[21rem] h-[22.4rem] cursor-pointer rounded-2xl p-1 sm:p-3 hover:bg-slate-800 text-white shadow-orange-500 shadow-sm ">
    <img className="w-full  rounded-lg " src={mainId+cloudinaryImageId} alt="" />
    <div className="flex items-center  mt-2 mx-2 justify-between">
    <h2 className="font-poppins mt-1 sm:font-medium text-[1rem]">{name}</h2>
    
    </div>
     
    <h2 className="font-poppins mt-1 sm:font-medium text-[1.1rem]">{category}</h2>      
    <h2 className="text-orange-500  font-poppins font-medium text-[1.5rem]">Rs.{price/100}</h2> 
     
    </div>

    
    </>

  )
}

export default Fooditem


{/*
    <h4 className="text-orange-500  font-poppins font-medium text-[1.5rem]">{costForTwoString}</h4>
    <p className="w-[80%] h-[1px] bg-slate-400 mb-2"> </p>
    
    <h3 className="text-sm font-poppins ">{cuisines.join(", ")}</h3>
    


    <div className="cursor-pointer rounded-2xl px-10  flex  flex-col
     hover:bg-slate-800 text-white shadow-orange-500 shadow-sm ">
    <div className="  object-contain">
    <img className=" object-fit w-[80%] rounded-lg " src={mainId+cloudinaryImageId} alt="" />
    </div>
    <div className="flex items-center flex-col  mt-2 mx-2 justify-between">
    <h4 className="text-orange-500  font-poppins font-medium text-[1.5rem]">{name}</h4>
    <h2 className="font-poppins mt-1 sm:font-medium text-[1.1rem]">{category}</h2>      
    <h2 className="font-poppins mt-1 sm:font-medium text-[1.1rem]">
    {price > 0
      ? new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "INR",
        }).format(item?.price / 100)
      : " "}
    </h2> 
    </div>
    </div>

*/}