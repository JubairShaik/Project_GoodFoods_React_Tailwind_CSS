// USING THIS COMPONENT LEADS TO CORS ERROR 

import React,{useState,useEffect,useContext} from 'react';
import Card from './Card';
import {mainId, swiggy_api_URL} from '../constants';
import { Link  } from "react-router-dom";
 
import  {addItem,removeItem} from '../../utils/cartSlice';
import { useDispatch } from 'react-redux';
import Shimmer from './../Shimmer';


function filterData(searchText,restaurants){

  const filterData = restaurants.filter((singlecard)=>
        singlecard?.data?.name?.toLowerCase()?.includes(searchText)|| singlecard.data.area.includes(searchText)
  );
  return  filterData;

}

const Apidata = () => {

  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filterdRestaurants , setfilterdRestaurants] = useState([]);
  const [searchText , setsearchText] = useState("");
 
  
  useEffect(() => {
     //A P I  C A L L
     getRestaurants()
    
    }, [])

    async function getRestaurants() {

      try{
      const data = await fetch(swiggy_api_URL);
      const json = await data.json();
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setfilterdRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      console.log(data)
      }
      catch (error) {
        console.log(error);
      }
      
      // console.log(json); 
    }
      <div>





      </div>

    

   return   (
    <>  
    <section className="bg-primary pt-10">
    

    {/*search Functionality*/}
    <div className="sm:bg-slate-600  
    ${styles.flexCenter}  ${styles.marginY}  ${styles.padding} 
    mb-4 justify-center rounded-full px-[.5rem] md:px-[1rem] items-center flex ">
    

    <input type="search"
    value={searchText}
    onChange = {(e)=>{
      setsearchText(e.target.value);
    }}
  
    className="md:w-[25rem] w-[15rem] text-[1rem] md:text-[1.3rem] text-white bg-slate-900 h-10 pl-6 font-poppins rounded-md md:rounded-l-full outline-none my-4" placeholder="Search Your Item"
      />

      
    <button
    onClick={() => {
      const data = filterData(searchText,allRestaurants)
      {/*update the state - restaurants*/} 
      setfilterdRestaurants(data);  
    }}
 
    
    className="bg-orange-500 font-bold translate-x-3
     hover:text-black md:translate-x-0 transition-all font-poppins
      hover:bg-cyan-500 py-2 w-[6rem] text-slate-900 md:w-[10rem] 
      rounded-md md:rounded-r-full ">Search
    </button>


    
    </div>

   


    <div className=" items-center justify-center flex-start 
    flex-wrap p-5 sm:p-10 flex  gap-8  sm:gap-10 rounded-lg shadow-pink">

    {filterdRestaurants.map((singlecard) => {
        return (
          <>
          <div className="flex flex-col">
          <Link to={"/restaurant/" +  singlecard.data.id} key={singlecard.data.id}
          >
          <Card {...singlecard.data} />
              
          </Link>
         
          </div>
        </>          
        )
    })}
    </div>

    </section>

    
    </>

  )
}

export default Apidata ;

 