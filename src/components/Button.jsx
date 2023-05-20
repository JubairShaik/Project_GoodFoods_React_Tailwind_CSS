import React from 'react';
import {Link}  from "react-router-dom"

const Button = ({styles}) => {
  return (
    <Link to="/Underconstruction">
   
    <button type="button" className={`py-3 mt-10 px-6 
    bg-orange-gradient text-[18px] font-poppins rounded-lg`} >
      Gets Started
    </button>
    </Link>
  )
}

export default Button