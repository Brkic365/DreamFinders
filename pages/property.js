import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/Property.module.scss";

import { HiArrowLongRight } from "react-icons/hi2";

export default function Property() {
  const router = useRouter();

  const [id, setId] = useState(null);

  // Whenever router updates, check if there is 'id' variable
  // in the query, and if it is, update the id state
  useEffect(() => {
    if (router.query.id) {
      setId(router.query.id);
    }
  }, [router]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Malibu Villa | DreamFinders Realty</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Explore our diverse range of listings and find your dream 
property that perfectly fits your unique lifestyle and preferences." />
        <meta property="og:image" content="/images/logo.png" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <main className={styles.main}>
        {/* Hero section */}
        <section className={styles.hero}>
          <h1>Malibu Villa</h1>
        </section>

        {/* About section */}
        <section className={styles.about}>
          <section className={styles.content}>
            <h2>About the Property</h2>
            <h3>$1,540,000</h3>
            <p>
              Introducing the ultimate in luxurious coastal living - a stunning
              Malibu villa nestled on the exclusive La Costa Beach. <br />
              <br />
              This exquisite villa boasts breathtaking ocean views, with direct
              access to the beach just steps away. With over 5,000 square feet
              of living space, this beautifully appointed home features five
              bedrooms and five bathrooms, providing ample space for both
              entertaining and relaxation. <br />
              <br />
              The open floor plan is flooded with natural light, highlighting
              the elegant finishes and designer touches throughout. The gourmet
              kitchen is a chef's dream, featuring top-of-the-line appliances
              and custom cabinetry. The spacious master suite offers a serene
              retreat, with a private balcony overlooking the ocean and a
              luxurious spa-like bathroom. <br />
              <br />
              Enjoy endless days of sunshine and stunning sunsets from the
              expansive outdoor living areas, including a rooftop deck with
              panoramic views, a private courtyard, and a beachfront patio. With
              its prime location and luxurious amenities, this Malibu villa
              offers the ultimate in California coastal living.
            </p>
            <section className={styles.buttons}>
              <button>Call now</button>
              <button className={styles.transparentBtn}>Message now</button>
            </section>
          </section>
          <section className={styles.images}>
            <section className={styles.backImgContainer} />
            <section className={styles.frontImgContainer} />
            <Link href={`/gallery?id=${id}`}>
              <section className={styles.cta}>
                <p>Open gallery</p>
                <HiArrowLongRight />
              </section>
            </Link>
          </section>
        </section>

        {/* Graphic section */}
        <section className={styles.graphic}>
          <section className={styles.imagePrice}>
            <h1>$1,540,000</h1>
            <section className={styles.backImgContainer} />
            <section className={styles.frontLeftImgContainer} />
            <section className={styles.frontRightImgContainer} />
          </section>
          <section className={styles.map}>
            <iframe
              width="100%"
              height="562"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=malibu%20california&t=&z=11&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </section>
        </section>
      </main>
    </div>
  );
}
