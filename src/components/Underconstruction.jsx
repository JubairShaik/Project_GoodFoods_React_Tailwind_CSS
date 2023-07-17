import React from 'react'
import {construction} from "../assets"




const Underconstruction = () => {

  
  return (
    <>
     
     <div 
      
     className="flex__style flex-col bg-primary h-screen " >
        <img className="w-[10rem] select-none "  src={construction} alt="construction" />
        <h2 className="text-center text-yellow-500 font-mono text-[20px] sm:text-[34px]"> Website Under Maintainance</h2>
        <p className="text-center text-green-500 font-mono text-[29px]" >Coming Soon....</p>
     </div>
    </>

  )
}

export default Underconstruction
