// import React from 'react'
import { clients } from "../constants";
import styles from "../style";

const Clients = () =>  (
      <section className={`${styles.flexCenter}my-4`}>
        <div className={`${styles.flexCenter} w-full  flex-wrap`}>
          {clients.map((client) => (
            <div key={client.id} className={`${styles.flexCenter} sm:min-w-[192px]
            min-w-[124px] flex-1`}>
              <h3>{client.logo}</h3>
            </div>
          ))}
        </div>

      </section>
)

export default Clients