import React from 'react'
import {quotes} from '@assets'

const FeedbackCard = ({content , name , title , img}) => {
  return (
    <div data-aos="fade-left" data-aos-duration="700" data-aos-delay="500">
    <div className="flex justify-between 
    cursor-pointer hover:shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-blue-500
    flex-col px-10 py-14 rounded-[20px]
    max-w-[380px] md:mr-10 sm:mr-5 my-0 mr-0 ">
      <img src={quotes} alt="quotes" 
      className="w-[45px] h-[27px] object-contain "/>

      <p className="font-poppins text-[18px] my-10 leading-[34px] text-white ">{content}</p>

    <div className="flex flow-row ">
      <img src={img} alt="persin" className="rounded-full w-[48px] h-[48px]" />
       <div className="flex flex-col ml-4">
      <h4 className="font-semibold text-[22px] leading-[32px] text-white ">{name}</h4>
      <h4 className="font-normal text-[18px] leading-[24px] text-dimWhite " >{title}</h4>  
    </div>
    </div> 
    </div> 
</div>

  )
}

export default FeedbackCard