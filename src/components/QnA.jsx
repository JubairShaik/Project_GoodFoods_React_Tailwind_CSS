import { useState } from "react";
import { exploreData } from "./constants";
// exploreData

import {plus , minus } from "../assets";

const title = () => {
  const [selectedType, setSelectedType] = useState("");

  return (
    <>
      <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
        <div className="  mt-[4rem] sm:mx-[5rem] ">

          <h1 className="sm:text-[2.6rem] text-[1.4rem] font-bold font-poppins text-center  text-slate-200 ">
            Frequently <span className="text-orange-500">Asked </span> Questions
          </h1>

          <div className=" my-5">
            {exploreData.map((data, index) => {
              return (

                <div data-aos="fade-dowm" data-aos-duration="500" data-aos-delay="700">

                <div
                  className="footer-accordian border-slate-500  border-[90%] border-b-[1px] "
                  key={index}
                >

                  <div
                    className=" flex items-center justify-between bg-transparent"
                    onClick={() =>
                      selectedType === data.type
                        ? setSelectedType("")
                        : setSelectedType(data.type)
                    }
                  >
                    <h2 className=" text-[1.1rem] sm:text-[1.5rem] font-bold font-poppins text-slate-300">
                      {data.question}
                    </h2>

                    {selectedType === data.type ? (
                      <div className="text-slate-500 text-[1.7rem] font-thin ">
                         <img className="h-4"  src={minus} alt="minus" />
                      </div>
                    ) : (
                      <div className="text-slate-500 text-[1.7rem]  font-semibold ">
                         <img className="h-4"  src={plus} alt="plus" />
                      </div>
                    )}
                  </div>

                  <div
                    className={`overflow-hidden ease-in-out translate-y-2 transition-all    duration-500 ${
                      selectedType === data.type
                        ? "max-h-[28rem]  mt-1"
                        : "max-h-0"
                    }`}
                  >
                    <span className=" text-[1rem] sm:text-[1.2rem]  my-2 opacity-90 text-slate-400 font-poppins">
                      {data.answer}
                    </span>
                  </div>
                </div>
          </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default title;
