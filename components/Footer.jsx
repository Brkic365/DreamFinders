import Link from "next/link";
import React from "react";
import styles from "@/styles/Footer.module.scss";

import {
  FaInstagram,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <section className={styles.categories}>
          <section className={styles.category}>
            <h5>LINKS</h5>
            <ul>
              <li>
                <Link href="#what-we-do">What we do</Link>
              </li>
              <li>
                <Link href="#our-work">Our work</Link>
              </li>
              <li>
                <Link href="#who-we-are">Who we are</Link>
              </li>
            </ul>
          </section>

          <section className={styles.category}>
            <h5>CONTACT</h5>
            <ul>
              <li>
                <FaEnvelope />
                <Link href="mailto:group.polyminds@gmail.com">
                  group.polyminds@gmail.com
                </Link>
              </li>
              <li>
                <FaInstagram />
                <Link
                  href="https://instagram.com/polyminds"
                  target="_blank"
                  rel="noreferrer"
                >
                  @polyminds
                </Link>
              </li>
              <li>
                <FaTwitter />
                <Link
                  href="https://twitter.com/MindsPoly"
                  target="_blank"
                  rel="noreferrer"
                >
                  @MindsPoly
                </Link>
              </li>
              <li>
                <FaFacebookF />
                <Link
                  href="https://www.facebook.com/people/Polyminds/100087741548596/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Polyminds
                </Link>
              </li>
            </ul>
          </section>

          <section className={styles.category}>
            <h5>OUR POLICIES</h5>
            <ul>
              <li>
                <Link href="/privacy-policy">Privacy policy</Link>
              </li>
              <li>
                <Link href="/terms-and-conditions">Terms and Conditions</Link>
              </li>
            </ul>
          </section>
        </section>

        <p>Copyright © Polyminds 2022. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;
