import styles from '../style'
import { arrowUp } from '../assets'
import { motion } from 'framer-motion'

const GetStarted = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.8,
      delay: 0.9,
    }}
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient 
    hover:bg-gradient-to-r from-cyan-500 to-sky-900 p-[2px] cursor-pointer`}
    >
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%]
      h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
            <span className='text-gradient'>Get</span>
          </p>
          <img src={arrowUp} alt='arrow' className='w-[23px] h-[23px]
          object-contain'/> 
        </div>
          <p className='font-poppins font-medium text-[18px] leading-[23px]'>
            <span className='text-gradient'>Started</span>
          </p>
      </div>
  </motion.div>
)

export default GetStarted