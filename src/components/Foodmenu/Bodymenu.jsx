import React, { useEffect , useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, NO_IMAGE_AVAILABLE } from "../../constants/index.js";
import { ARRAY_OF_MENU_OF_RESTAURANTS } from "../../mocks/mockData.js";
import { addItem } from "../../utils/cartSlice";
import ShimmerMenu from "../ShimmerMenu";
import { star } from "../../assets";
import { idIndexPair ,getMenuFromResID  } from "../../utils/helper";
import Navbar from './../Header/Navbar';
 import { Link } from "react-router-dom";
 
export default function Bodymenu() {
  const { resId } = useParams();
  const dispatch = useDispatch();

   
  const [showPopup, setShowPopup] = useState(false);

  function addFoodItem(item) {
    dispatch(addItem(item));
    setShowPopup(true);

    // Reset showPopup state after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  }


  const test = getMenuFromResID(
    resId,
    ARRAY_OF_MENU_OF_RESTAURANTS,
    idIndexPair
  );

  const firstTwoCuisines = test.cuisines.slice(0, 3).join(", ");

  return !test ? (
    <ShimmerMenu />
  ) : (
    <>
      <div className="bg-primary text-white font-poppins     ">
        <div className="px-[1rem] bg-primary  w-[100%]  fixed sm:px-[10rem]">
          <Navbar />
        </div>

        <div className="flex    p-6 sm:p-16 space-x-6 justify-center mt- bg-gray-900 text-gray-100">
          <div className="p-2 flex  pt-[6rem]   justify- items-center gap-10 flex-col sm:flex-row   ">
            <img
              className=" rounded-md"
              src={IMG_CDN_URL + test.cloudinaryImageId}
              alt={test.name}
            />
            <div className="justify-between    min-w-[347px] space-y-4   sm:space-y-6">
              <div
                className="flex items-center gap-8 justify-between
         "
              >
                <h1 className="sm:text-3xl text-2xl  sm:font-semibold">
                  {test.name}
                </h1>

                <p className="text-yellow-400 flex items-center gap-2 rounded-md justify-center font-poppins bg-slate-800 w-14 h-6 text-center">
                  {test.avgRating}{" "}
                  <img
                    className="h-3"
                    src={star}
                    alt=""
                  />
                </p>
              </div>

              <h3 className=" ">
                📍 {test.area}, {test.city}
              </h3>

              <h3 className="text-xl sm:text-2xl"> 🍲 {firstTwoCuisines} </h3>
              <h3 className="text-3xl sm:text-4xl font-semibold   text-green-500">
                {test.costForTwoMsg}
              </h3>

              <Link to="/underconstruction" >
              <button className="bg-orange-500  text-[1.4rem] rounded-md text-white  sm:py-[.9rem] py-[.6rem] sm:px-[5rem]  w-[100%]   mt-5  font-medium text-center font-poppins">
                Order Now
              </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col space-y-2 justify-center items-center">
          <div>
            <h2 className="textorang text-center  my-6   font-bold text-[1.6rem] sm:text-[1.9rem] sm:leading-[100px] leading-[50px] font-poppins  z-10">
              You may Also Like......
            </h2>

            {Object.values(test.menu.items).map((item) => (
              <div
                key={item.name}
                data-testid="menu"
                className="flex flex-row p-3 m-3 space-x-5 max-w-2xl rounded-lg justify-between"
              >
                <div className="flex min-w-[366px] bg-slate-800 p-2 rounded-md sm:w-[43rem] space-x-3">
                  <img
                    src={
                      !item.cloudinaryImageId
                        ? NO_IMAGE_AVAILABLE
                        : IMG_CDN_URL + item.cloudinaryImageId
                    }
                    className="w-[10.7rem]  rounded-md"
                    alt={item.name}
                  />
                  <div className="flex sm:flex-row  sm:gap-[4rem]  items-center    gap-2 flex-col flex-1 ">
                    <div className="flex flex-col space-y-3 w-full   ">
                      <h1 className="sm:font-semibold  sm:text-[20px]   text-[16px] overflow-hidden overflow-ellipsis">
                        {item.name}
                      </h1>
                      <p className="text-green-400 sm:text-[1.6rem] text-[1.3rem]  font-semibold">
                        ₹ {item.price / 100}
                      </p>
                    </div>

                    <button
                      onClick={() => addFoodItem(item)}
                      className="bg-green-700 h-10  w-full p-2 px-3 text-white rounded-md mr-0 hover:bg-green-600"
                    >
                      Add to cart
                    </button>
                    <div className="popup-container">
                    {showPopup && <div className="popup-animation">Item added to cart ✅!  </div>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
