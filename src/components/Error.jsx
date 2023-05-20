// import {UseRouteError} from "react-router-dom";
// const err = useRouteError();


const Error = () => {
 
   
  return (
    <>
    <div className="bg-yellow-600 flex font-poppins items-center justify-center  flex-col h-screen ">
    <div className="flex items-center">
    <img className="h-[5rem]" src="https://www.svgrepo.com/download/271847/shocked-emoji.svg" alt="" />
    <h1 className="text-[4rem] sm:text-[6rem] font-bold">Oops!</h1>
    </div>
    <h2 className="sm:text-[3.5rem] text-[1.67rem] font-bold font-poppins">Somthing Went Wrong</h2>
    <p className="sm:text-[3.5rem] text-[1rem] font-bold font-poppins">We Will Be Back Soon</p>
    </div>
    </>
  )
}

export default Error
