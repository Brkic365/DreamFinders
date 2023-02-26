import React from 'react';
import styles from "@/styles/ContactCard.module.scss";

function ContactCard({ type }) {
  return (
    <section className={styles.contactCard}>
      <section className={styles.top}>
        <section className={styles.iconBox}>
          {type.icon}
        </section>
        <h3>{type.title}</h3>
      </section>
      <p>{type.description}</p>
      <span>{type.link}</span>
    </section>
  )
}

export default ContactCard