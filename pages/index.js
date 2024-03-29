import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.scss";

import Searchbar from "@/components/Searchbar";
import NumberCounter from "@/components/NumberCounter";
import PropertyCard from "@/components/PropertyCard";

import { useRouter } from "next/router";

import { motion } from "framer-motion";

const popularPropertyIds = [0, 1, 2, 3];

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>DreamFinders Realty</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Explore our diverse range of listings and find your dream 
property that perfectly fits your unique lifestyle and preferences."
        />
        <meta property="og:image" content="/images/logo.png" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <main className={styles.main}>
        {/* Hero section */}
        <section className={styles.hero}>
          <section className={styles.content}>
            <h1>Discover Your Dream Property</h1>
            <p className={styles.description}>
              Explore our diverse range of listings and find your dream property
              that perfectly fits your unique lifestyle and preferences.
            </p>
            <Searchbar />
            <section className={styles.stats}>
              <NumberCounter number="200" sufix="k+" title="Properties" />
              <NumberCounter number="113" title="Awards" />
              <NumberCounter
                number="1.5"
                decimals={1}
                sufix="M+"
                title="Users"
              />
            </section>
          </section>

          <section className={styles.heroImgContainer} />
        </section>

        {/* Popular properties section */}
        <section className={styles.properties} id="popular-properties">
          <h2>Popular properties</h2>

          <section className={styles.propertyGrid}>
            {
              // Map through all popular properties and render them

              popularPropertyIds.map((propertyId) => {
                return <PropertyCard id={propertyId} key={propertyId} />;
              })
            }
          </section>

          <Link href="/properties">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See more
            </motion.button>
          </Link>
        </section>

        {/* About us section */}
        <section className={styles.about} id="about-us">
          <section className={styles.content}>
            <h2>About Us</h2>
            <p>
              Dreamfinders Realty is a premier real estate company dedicated to
              helping clients achieve their dreams of buying, selling, or
              renting property. <br />
              With a team of highly experienced and knowledgeable real estate
              professionals, we strive to provide exceptional service and
              expertise in the ever-changing real estate market. <br />
              Our mission is to create a stress-free and personalized experience
              for each of our clients, with a focus on transparency,
              communication, and trust. <br />
              Whether you are looking to buy your dream home, sell your property
              for the highest value, or rent a property that fits your
              lifestyle, Dreamfinders Realty is here to guide you every step of
              the way.
            </p>
            <section className={styles.buttons}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call now
              </motion.button>
              <motion.button
                className={styles.transparentBtn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Message now
              </motion.button>
            </section>
          </section>
          <section className={styles.aboutImgContainer} />
        </section>

        {/* Get started section */}
        <section className={styles.getStarted} id="contact">
          <section className={styles.box}>
            <h2>Get Started with DreamFinders Realty</h2>
            <p>
              Dreamfinders Realty is a premier real estate company dedicated to
              helping clients achieve their dreams of buying, selling, or
              renting property.
            </p>
            <motion.button
              onClick={() => router.push("mailto:info@polyminds.tech")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get started
            </motion.button>
          </section>
        </section>
      </main>
    </div>
  );
}
