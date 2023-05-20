import React from 'react'

const Underconstruction = () => {
  return (
    <>
    <div className="bg-primary  flex-col flex justify-center font-poppins items-center h-screen ">
    <div className="absolute mb-10 z-[0] w-[50%] h-[60%]  -left-[50%] orange__gradient rounded-full "/>
    <div className="absolute mb-10 z-[0] w-[50%] h-[60%]  -left-[10%] orange__gradient rounded-full "/>
     <span className="text-gradient text-center text-[2rem] font-bold text-bold md:text-[2rem]">Website Under Maintance</span>
    <p className="textorang text-[1rem] z-10 font-bold md:text-[4rem]"> We Will Be Back Soon.... </p>
    <div className="absolute z-[0] -left-1/2 bottom-0 w-[100%] h-[50%] rounded-full blue__gradient"/>
    <div className="absolute z-[0] -left-1/2 bottom-0 w-[100%] h-[50%] rounded-full blue__gradient"/>
    <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>

    </div>
    </>

  )
}

export default Underconstruction
