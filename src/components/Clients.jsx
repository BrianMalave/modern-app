import { clients } from "../constants"
import styles from "../style"

/* TODO: Make the anchor tags for clients logo with preferred links */

const Clients = () => (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter} 
          sm:mind-w-[192px] min-w-[120px]`}>
            <img src={client.logo} alt="client" className="sm:w-[192px]
            w-[100px] object-contain cursor-pointer
            hover:bg-gradient-to-r from-sky-100 to-cyan-500 rounded-xl py-4 px-6" />
          </div>
        ))}
      </div>
    </section>
  )

export default Clients