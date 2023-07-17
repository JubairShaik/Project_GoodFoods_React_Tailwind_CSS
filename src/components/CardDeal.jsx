import React from "react";
import { lemon } from "../assets";
import Button from "./Button";
import styles, { layout } from "../style";
import { Link } from "react-router-dom";

const CardDeal = () => {
  return (
    <section className={`${layout.section} mt-10 md:mt-2`}>
      <div className={layout.sectionInfo}>
        <div data-aos="fade-up" data-aos-duration="700" data-aos-delay="500">
          <h2 className={styles.heading2}>
            Discover the best food & <br className="sm:block hidden" /> drinks
            in nearest Restaurant
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            The quality of the food and service is consistently top-notch, and I
            always leave feeling satisfied and happy.
          </p>
          <Link to="/aboutus"
           onClick={() => window.scrollTo(0, 0)}
          >
            <button
               type="button"
               className={`py-3 mt-10 px-6 
               bg-yellow-gradient text-[18px]  font-semibold font-poppins rounded-lg`}
            >
              Know More About us
            </button>
          </Link>
        </div>
      </div>

      <div className={layout.sectionImg}>
        <div data-aos="zoom-in" data-aos-duration="700" data-aos-delay="500">
          <img src={lemon} alt="billing" className="w-[100%] h-[100%]" />
        </div>
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[100%] h-[50%] rounded-full blue__gradient" />
        <div className="absolute z-[2] w-[50%] h-[85%] bottom-[70px] right-[100px]  yellow" />
      </div>
    </section>
  );
};

export default CardDeal;
