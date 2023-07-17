import styles from "../style";
import { arrowUp } from "../assets";
 


 
const GetStarted = () => (


 <a href="#body">
  <div
    className={`${styles.flexCenter} outline-dotte gap-1 outline-dashed outline-lime-500  w-[140px] h-[140px]
      rounded-full bg-orange-400
      p-[2px] cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter}
     flex-col bg-primary 
    w-[100%] h-[100%] rounded-full cursor-pointer`}
    >
      <div
        className={`${styles.flexStart}
                          flex-row   `}
      >
        <p
          className="font-poppins text-[18px] font-medium 
                    leading-[23px] "
        >
          <span className=" text-yellow-400 mr-2">Get</span>
        </p>
        <img
          src={arrowUp}
          alt="arrow"
          className="w-[24px] h-[24px]
                      object-contain "
        />
      </div>

      <p
        className="font-poppins text-[18px] font-medium 
                    leading-[23px] "
      >
        <span className="font-bold text-orange-600"> Started</span>
      </p>
    </div>
  </div>
  </a>

);

export default GetStarted;
