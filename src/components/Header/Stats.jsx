import { stats } from "../../constants";
import styles from "../../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:my-10 my-6`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`} >
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[34.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal  text-[19.3px]  md:text-[23.45px] xs:leading-[26.58px] leading-[21.58px] text-orange-500 uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
