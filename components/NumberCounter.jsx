import React from "react";
import styles from "@/styles/NumberCounter.module.scss";

import CountUp from "react-countup";

function NumberCounter({ number, sufix = "", decimals = 0, title }) {
  return (
    <section className={styles.numberCounter}>
      <h3>
        <CountUp end={number} decimals={decimals} decimal="." suffix={sufix} />
      </h3>
      <p className={styles.title}>{title}</p>
    </section>
  );
}

export default NumberCounter;
