// import React from "react";
// import { useState, useEffect } from "react";
// import Shimmer from "./Shimmer";
// import { Link } from "react-router-dom";
// import { filterData } from "../utils/helper.js";
// import { ALL_RESTAURANTS_LIST } from "../mocks/mockData";
// import BodyCard from './BodyCard';


// function Body() {

//   const [allRestaurants, setAllRestaurants] = useState([]);
//   const [filteredRestaurants, setFilteredRestaurants] = useState([]);
//   const [searchText, setSearchText] = useState("");

//   // const { user, setUser } = useContext(UserContext);

//   useEffect(() => {
//     setFilteredRestaurants(ALL_RESTAURANTS_LIST);
//     //api call
//     // getRestaurants(setAllRestaurants, setFilteredRestaurants);
//   }, []);

//   useEffect(() => {
//     const data = filterData(searchText, ALL_RESTAURANTS_LIST);
//     // update the state - restaurants
//     setFilteredRestaurants(data);
//   }, [searchText]);

//   //early return
//   if (!ALL_RESTAURANTS_LIST) return null;

//   return ALL_RESTAURANTS_LIST?.length === 0 ? (
//     <Shimmer />
//   ) : (

//     <div  id="body"  className="flex  flex-col">
//       <div className=" p-1 my-8 flex justify-center items-center text-center mt-4 sm:mt-14">
//       <div
//        data-aos="zoom-in" data-aos-duration="700" data-aos-delay="600"
//        className="absolute z-[0] w-[75%] h-[27%] right-[70rem]  top-[25rem] orange__gradient"/>
//         <div
//        data-aos="zoom-in" data-aos-duration="700" data-aos-delay="600"
//        className="absolute z-[0] w-[75%] h-[57%] left-[70rem]  top-[25rem] blue__gradient"/>
//         <input
//           data-testid="search-input"
//           type="text"
//           className=" mx-3 p-2 px-2 w-[100%] sm:w-[50%]  border
//           border-gray-300 rounded-md
//           focus:outline-none "
//           placeholder="Search Your item"
//           value={searchText}
//           onChange={(e) => {
//             //e.target.value is whatever i write
//             setSearchText(e.target.value);
//           }}
//         />

         
//         {/* <button
//           data-testid="search-btn"
//           className=" p-2   text-white rounded-md hover:shadow-md max-sm:hidden"
//           onClick={() => {
//             //need to filter the data
//             const data = filterData(searchText, allRestaurants);
//             // update the state - restaurants
//             setFilteredRestaurants(data);
//           }}
//         >
//           Search
//         </button> */}
//       </div>



    
 
      


//       <div
//         className=" items-center justify-center flex-start 
//          flex-wrap  sm:p-10 flex  gap-8  sm:gap-12 rounded-lg shadow-pink  "
//         data-testid="res-list"
//       >
//         {filteredRestaurants.map((restaurant) => {
//           return (
//             <Link
//               to={`/restaurant/${restaurant.data.id}`}
//               key={restaurant.data.id}
//               onClick={() => window.scrollTo(0, 0)}
              
//               className="res-cards "
//             >
//             <div
//             data-aos="fade-up" data-aos-duration="500" data-aos-delay="400"
//             >
            
//             <BodyCard {...restaurant.data} />
//             </div>
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Body;



import React from "react";
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

  return (
    <div id="body" className="flex flex-col">
       <div
        data-aos="zoom-in" data-aos-duration="700" data-aos-delay="600"
        className="absolute z-[0] sm:w-[75%] sm:h-[27%]  h-[60%] w-[50%] sm:right-[70rem]  bottom-[40rem] orange__gradient"/>
         <div
        data-aos="zoom-in" data-aos-duration="700" data-aos-delay="600"
        className="absolute z-[0] sm:w-[75%] h-[30%] w-[30%] sm:h-[57%] sm:left-[70rem]  left-[1rem] top-[5rem] blue__gradient"/>
      <div className="p-1 my-8 flex justify-center items-center text-center mt-4 sm:mt-14">
        <input
          data-testid="search-input"
          type="text"
          className="mx-3 p-2 px-2 w-[100%] sm:w-[50%] border border-gray-300 rounded-md focus:outline-none"
          placeholder="Search Your item"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
      </div>

      {filteredRestaurants.length === 0 ? (
        <div className="text-center text-[1.9rem]  font-poppins text-yellow-400 "> Currently Not Available😐</div>
      ) : (
        <div
          className="items-center justify-center flex-start flex-wrap sm:p-10 flex gap-8 sm:gap-12 rounded-lg shadow-pink"
          data-testid="res-list"
        >
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={`/restaurant/${restaurant.data.id}`}
                key={restaurant.data.id}
                onClick={() => window.scrollTo(0, 0)}
                className="res-cards"
              >
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="400"
                >
                  <BodyCard {...restaurant.data} />
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Body;
