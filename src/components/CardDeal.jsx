import { card } from "../assets"
import styles, { layout } from '../style'
import Button from "./Button"
import { motion } from "framer-motion"

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      
      <h2 className={styles.heading2}>
          Find a better card deal <br className='sm:block hidden' />
          in few easy steps.
      </h2>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. 
          Aliquet quis aliquet eget mauris tortor.ç 
          Aliquet ultrices ac, ametau.
      </p>
      <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
        >
      <Button styles="mt-10" />
      </motion.div>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className='w-[100%] h-[100%]' />
      <div className='absolute <-[1] w-[60%] h-[60%] rounded-full 
      bottom-40 blue__gradient' />
    </div>
  </section>
)

export default CardDeal