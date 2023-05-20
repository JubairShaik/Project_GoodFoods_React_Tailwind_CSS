import React from 'react'

const Shimmer = () => {
  return (
    <>
     <div className="bg-primaryflex-wrap sm:p-10 sm:gap-10 rounded-lg
      p-3 flex  flex-wrap  justify-center gap-10   ">
    {Array(9).fill("").map((e ,index)=>(
      <div key={index} className="sm:w-[23rem] w-[21rem] h-[22.4rem] cursor-pointer rounded-2xl  p-2 sm:p-3 bg-slate-900">
       <div className=" sm:w-[21.5rem] w-[20rem] h-[13rem] bg-slate-600 rounded-xl"/>
       <div className="flex items-center  mt-2  justify-between">
       <h2 className="font-poppins mt-2 sm:font-medium text-slate-500 text-[1.1rem]"> Loading....</h2>
        
       <p className="text-yellow-500 flex items-center gap-2 rounded-md
       justify-center font-poppins bg-slate-800 w-14  h-6 text-center ">
       <img className="h-3" src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="" />
       </p>
       </div>
       
       <div>
       <h4 className="text-orange-500  font-poppins font-medium text-[1.5rem]">loading</h4>
       <p className="w-[80%] h-[1px] bg-slate-400 mb-2">*</p>
       <h3 className="text-sm text-slate-400 font-poppins ">Loading </h3>
       </div>
       </div>
    ))}
     </div>
     </>

  )
}

export default Shimmer
