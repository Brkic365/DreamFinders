import React from 'react';
import styles from "@/styles/NumberCounter.module.scss"

function NumberCounter({number, title}) {
  return (
    <section className={styles.numberCounter}>
      <h3>{number}</h3>
      <p className={styles.title}>{title}</p>
    </section>
  )
}

export default NumberCounter