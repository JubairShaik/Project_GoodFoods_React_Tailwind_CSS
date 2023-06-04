import React from "react";
// import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper.js";
import { ALL_RESTAURANTS_LIST } from "../mocks/mockData";
import BodyCard from './BodyCard';

function Body() {

  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  // const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    setFilteredRestaurants(ALL_RESTAURANTS_LIST);
    //api call
    // getRestaurants(setAllRestaurants, setFilteredRestaurants);
  }, []);

  useEffect(() => {
    const data = filterData(searchText, ALL_RESTAURANTS_LIST);
    // update the state - restaurants
    setFilteredRestaurants(data);
  }, [searchText]);

  //early return
  if (!ALL_RESTAURANTS_LIST) return null;

  return ALL_RESTAURANTS_LIST?.length === 0 ? (
    <Shimmer />
  ) : (
    <div  id="body"  className="flex  flex-col">
      <div className=" p-1 my-8 flex justify-center items-center text-center mt-4 sm:mt-14">
        <input
          data-testid="search-input"
          type="text"
          className=" mx-3 p-2 px-2 w-[100%] sm:w-[50%]  border
           border-gray-300 rounded-md
            focus:outline-none "
          placeholder="Search Your item"
          value={searchText}
          onChange={(e) => {
            //e.target.value is whatever i write
            setSearchText(e.target.value);
          }}
        />

        <button
          data-testid="search-btn"
          className=" p-2 px-4 bg-gray-700 text-white rounded-md hover:shadow-md max-sm:hidden"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div
    
        className=" items-center justify-center flex-start 
         flex-wrap p-5 sm:p-10 flex  gap-8  sm:gap-10 rounded-lg shadow-pink  "
        data-testid="res-list"
      >
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={`/restaurant/${restaurant.data.id}`}
              key={restaurant.data.id}
              className="res-cards "
            >
            <div
            data-aos="fade-up" data-aos-duration="500" data-aos-delay="400"
            >
            
            <BodyCard {...restaurant.data} />
            </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Body;
