import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.scss";

import { motion } from "framer-motion";

import MobileMenu from "./MobileMenu";

import { AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/router";

import { BsFillHouseDoorFill, BsFillTelephoneFill, BsFillPeopleFill } from "react-icons/bs";

function Navbar() {
  const router = useRouter();

  // State that handles opening and closing of the mobile menu
  const [openMenu, setOpenMenu] = useState(false);

  const [links] = useState([
    {
      title: "Properties",
      href: "/#popular-properties",
      img: <BsFillHouseDoorFill />,
    },
    {
      title: "About Us",
      href: "/#about-us",
      img: <BsFillPeopleFill />,
    },
    {
      title: "Contact",
      href: "/#contact",
      img: <BsFillTelephoneFill />,
    },
  ]);

  // Values asigned to the top line of the hamburger menu used for rotation
  const topLineVariants = {
    open: { transform: "translateY(350%) rotateZ(45deg)" },
    closed: { transform: "translateY(0%) rotateZ(0deg)" },
  };

  // Values asigned to the bottom line of the hamburger menu used for rotation
  const bottomLineVariants = {
    open: { transform: "translateY(-350%) rotateZ(-45deg)" },
    closed: { transform: "translateY(0%) rotateZ(0deg)" },
  };

  return (
    <nav className={styles.nav}>
      <MobileMenu
        open={openMenu}
        links={links}
        setOpen={(open) => setOpenMenu(open)}
      />

<div
        className={styles.hamburger}
        onClick={() => setOpenMenu(!openMenu)}
        id="hamburger"
      >
        <motion.div
          className={styles.line}
          animate={openMenu ? "open" : "closed"}
          transition={{ duration: 0.3, type: "tween" }}
          variants={topLineVariants}
          id="line1"
        />
        <div
          className={styles.line}
          style={openMenu ? { opacity: 0 } : undefined}
          id="line2"
        />
        <motion.div
          className={styles.line}
          animate={openMenu ? "open" : "closed"}
          transition={{ duration: 0.3, type: "tween" }}
          variants={bottomLineVariants}
          id="line3"
        />
      </div>

      <section className={styles.logoHolder} onClick={() => router.push("/")}>
        <Image
          src="/images/logo.webp"
          alt="DreamFinders logo"
          width={177}
          height={41}
          priority
          objectFit="contain"
          layout="responsive"
        />
      </section>

      {/* Navbar links */}
      <ul className={styles.links}>
        {links.slice(0, 2).map((link) => {
          return (
            <li key={link.href}>
              <a href={link.href}>{link.title}</a>
            </li>
          );
        })}

        <motion.button
          className={styles.cta}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/#contact")}
        >
          Get in touch
        </motion.button>
      </ul>
    </nav>
  );
}

export default Navbar;
