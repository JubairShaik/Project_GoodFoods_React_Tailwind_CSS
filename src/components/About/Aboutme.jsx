  import React from "react";

  import { jubair, linkdin ,portfolio} from "@assets";

  const Aboutme = () => {
    return (
      <div className=" ">
        <h2 className=" font-poppins  text-blue-400  mt-[3rem]  md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          AboutME
        </h2>
        <div className="h-full flex flex-col  sm:flex-row  mt-[2rem] transition-none duration-100  sm:mt-[1rem] justify-center items-center gap-5   m-2 ">
          <img
            src={jubair}
            className=" flex flex-1    rounded-full   shadow2   border-1 border-yellow-500   transition duration-300 ease-in-out transform hover:scale-105 p-3  cursor-pointer     h-[300px] object-cover   sm:rounded-full"
            alt="image"
          />

          <div className="flex flex-col  ">
            <p className="mt-3 z-40 text-slate-200 text-justify text-[19px]   font-mono  w-full sm:text-[25.5px]  text-mo   leading-[34px]">
              I'm a skilled Web developer Currently Studying in{" "}
              <span className="text-violet-500">
                Vishnu Institute of Technology
              </span>{" "}
              (VIT-B) with experience in{" "}
              <span className="text-blue-600">TypeScript</span> and{" "}
              <span className="text-yellow-400">JavaScript,</span>
              and expertise in frameworks like React and{" "}
              <span className="text-green-600">Node.js</span>. I'm a quick learner
              and collaborate closely with Other Skilled Developers to create
              user-friendly solutions that solve real-world problems. Let's work
              together to bring your ideas to life!
            </p>
            <div className=" flex justify-start flex-col sm:flex-row  gap-2 sm:gap-5 ">


              
            

              <a href="https://www.linkedin.com/in/imjubairahmed/" target="_blank">
                <button className="bg-black-500 z-50 text-blue-400 hover:text-white  flex__style  text-[20px]  w-full  font-poppins    hover:bg-cyan-700 mt-5 font-normal py-2 px-4 rounded-[10px] border border-blue-500 shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                  {" "}
                  LETS CONNECT <img className="h-[30px] ml-2 " src={linkdin} alt="" />
                </button>
              </a>


            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Aboutme;
