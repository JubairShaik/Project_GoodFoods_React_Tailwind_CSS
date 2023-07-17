import React from "react";
import { IMG_CDN_URL, NO_IMAGE_AVAILABLE } from "../constants";

const BodyCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  costForTwoString,
  avgRating,
  lastMileTravelString,
}) => {
  // Extract the first two cuisines
  const firstTwoCuisines = cuisines.slice(0, 2).join(", ");

  return (
    <div className=" max-w-[358px] font-poppins   h-auto transition-all cursor-pointer rounded-2xl p-1 sm:p-3 hover:shadow-orange-500 text-white  shadow-sm">
      <img
        className="w-full rounded-lg"
        src={
          !cloudinaryImageId
            ? NO_IMAGE_AVAILABLE
            : IMG_CDN_URL + cloudinaryImageId
        }
      />

      <div className="flex items-center mt-2 mx-1 justify-between">
        <h2 className="font-poppins mt-1 sm:font-medium text-[1.3rem]">
          {name}
        </h2>
        <p className="text-yellow-400 flex items-center gap-2 rounded-md justify-center font-poppins bg-slate-800 w-14 h-6 text-center">
          {avgRating}{" "}
          <img
            className="h-3"
            src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
            alt=""
          />
        </p>
      </div>

      <h4 className="text-green-500 font-poppins font-medium text-[1.5rem]">
        {costForTwoString}
      </h4>
      <p className="w-[100%] h-[1px] bg-slate-400 mb-2"></p>
      <div className="flex justify-between mx-2 ">
        <h3 className="cuisines text-[15px] text-gray-500">
          {firstTwoCuisines}
        </h3>
        <h4 className=" text-[15px]">📍{lastMileTravelString} away</h4>
      </div>
    </div>
  );
};

export default BodyCard;
