import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'
import { motion, useAnimationControls } from "framer-motion"

const variables = {
  initial: { x: -500, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  transition: {
    duration: 1,
    delay: 1.2,
  },
};

const Billing = ({ variables }) => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
        <motion.img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

      <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full
      white__gradient' />
      <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full
      pink__gradient' />
    </div>

    <div className={layout.sectionInfo}>
      <motion.h2
          initial={{ x: -500, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.2,
          }}
          className={styles.heading2}
        >
          Easily control your <br className='sm:block hiddent' />
          billing & invoicing.
      </motion.h2>
      <motion.p
          initial={{ x: -500, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.4,
          }}
          className={`${styles.paragraph} max-w-[470px] mt-5`}
        >
        Elit enim sed massa etiam. 
        Mauris eu adipiscing ultrices ametodio aenean neque. 
        Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </motion.p>

        <div className=' flex flex-row flex-wrap sm:mt-10 mt-6'>
        <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1.6,
            }}
            src={apple}
            alt="appstore"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
        />

        <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1.8,
            }}
            src={google}
            alt="playstore"
            className="w-[128px] h-[42px] object-contain  cursor-pointer"
        />

        </div>
    </div>

  </section>  
)

export default Billing