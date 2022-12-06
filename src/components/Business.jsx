import { features } from "../constants"
import styles, { layout } from "../style"
import Button from "./Button"
import { motion } from "framer-motion"

const FeatureCard = ({ icon, title, content, index}) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${
        index !== features.length ? "mb-6" : "mb-0"
      } feature-card`}
    >
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter}
    bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className=" flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px]
      mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]
      mb-1">
        {content}
      </p>
    </div>
  </div>
)

const Business = () => (

  <section id="features" className={`${layout.section} mt-28`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
          You do the business,
        <br className="sm:block hidden" /> we’ll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial 
          life by building credit, earning rewards and saving money. 
          But with hundreds of credit cards on the market.
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
        >
        <Button styles="mt-10" />
        </motion.div>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} 
          {...feature}
          delay={0.5 + (index * 2) / 10} />
        ))}
      </div>
    </section>
)

export default Business