import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, NO_IMAGE_AVAILABLE } from "../constants";
// import useRestaurant from "../utils/useRestaurant";
import { ARRAY_OF_MENU_OF_RESTAURANTS } from "../mocks/mockData";
import { addItem } from "../utils/cartSlice";
import ShimmerMenu from "./ShimmerMenu";
import { idIndexPair } from "../utils/helper";
import { getMenuFromResID } from "../utils/helper";

export default function Bodymenu() {
  const { resId } = useParams();
  const dispatch = useDispatch();

  function addFoodItem(item) {
    dispatch(addItem(item));
  }

  const test = getMenuFromResID(
    resId,
    ARRAY_OF_MENU_OF_RESTAURANTS,
    idIndexPair
  );

  return !test ? (
    <ShimmerMenu />
  ) : (
    <>
      <div className="flex p-16 space-x-6 justify-center mt-24 bg-gray-900 text-gray-100">
        <img
          className="w-96 rounded-md"
          src={IMG_CDN_URL + test.cloudinaryImageId}
          alt={test.name}
        />
        <div className="justify-center space-y-1">
          <h1 className="text-4xl font-semibold">{test.name}</h1>
          <h3 className="text-2xl">
            📍 {test.area}, {test.city}
          </h3>
          <h3 className="text-2xl">🌟 {test.avgRatingString} stars</h3>
          <h3 className="text-2xl">🍲 {test.costForTwoMsg}</h3>
        </div>
      </div>

      <div className="flex flex-col space-y-2 justify-center items-center">
        <div>
          {Object.values(test.menu.items).map((item) => (
            <div
              key={item.name}
              data-testid="menu"
              className="flex p-4 m-4 space-x-5 max-w-xl rounded-lg justify-between"
            >
              <div className="flex space-x-3">
                <img
                  src={
                    !item.cloudinaryImageId
                      ? NO_IMAGE_AVAILABLE
                      : IMG_CDN_URL + item.cloudinaryImageId
                  }
                  className="w-48 rounded-md"
                  alt={item.name}
                />
                <div className="flex flex-col">
                  <h1 className="font-semibold text-xl">{item.name}</h1>
                  <p className="font-normal">₹ {item.price / 100}</p>
                </div>
              </div>

              <button
                onClick={() => addFoodItem(item)}
                className="bg-green-700 h-10 p-2 px-3 text-white rounded-md mr-0 hover:bg-green-600"
              >
                Add
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
