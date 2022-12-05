import { stats } from "../constants"
import styles from "../style"
import Counter from "./Counter"

const Stats = () => (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mt-20 mt-6 `}>
      {stats.map((stat) => (
        <div key={stat.id} 
          className={`flex-1 flex justify-center sm:justify-start 
          items-center flex-row m-3`}>
          
          <h4 className="font-poppins font-semibold sm:text-[40px] text-[30px] sm:leading-[53px] leading-[43px] text-white">
            <Counter
              from={0}
              to={stat.value}
              textBefore={stat.textBefore ? stat.textBefore : ""}
              textAfter={stat.text}
            />
          </h4>

          <p className="font-poppins font-normal xs:text-[20px] text-[15px] 
          xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">{stat.title}</p>
        </div>
      ))}
    </section>
)

export default Stats