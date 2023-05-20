import React from 'react'
import {mainId,FoodList} from './constants';

const Card = ({name,area,cloudinaryImageId,
    totalRatingsString , avgRating,costForTwoString,cuisines} )=>{
  
    return(  
       <div className="sm:w-[23rem] w-[21rem] h-[22.4rem] cursor-pointer rounded-2xl p-1 sm:p-3 hover:bg-slate-800 text-white shadow-orange-500 shadow-sm ">
       <img className="w-full  rounded-lg " src={mainId+cloudinaryImageId} alt="" />
       <div className="flex items-center  mt-2 mx-2 justify-between">
       <h2 className="font-poppins mt-1 sm:font-medium text-[1.1rem]">{name}</h2>
       <p className="text-yellow-500 flex items-center gap-2 rounded-md justify-center font-poppins bg-slate-800 w-14  h-6 text-center ">{avgRating} 
       <img className="h-3" src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="" />
       </p>
       </div>
       <h4 className="text-orange-500  font-poppins font-medium text-[1.5rem]">{costForTwoString}</h4>
       <p className="w-[80%] h-[1px] bg-slate-400 mb-2"> </p>
 
       
       </div>
    )
  }
  
export default Card
